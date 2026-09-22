import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const active = (item) => !item?.hidden && !item?.deprecated;
const json = async (file) => JSON.parse(await readFile(file, "utf8"));

async function loadDirectory(name) {
  const dir = path.join(root, "data", name);
  const files = (await readdir(dir)).filter((file) => file.endsWith(".json")).sort();
  return Promise.all(files.map(async (file) => ({ file, value: await json(path.join(dir, file)) })));
}

function performersFor(vocalsText, performers) {
  return performers.filter((performer) => vocalsText?.includes(performer.name)).map((performer) => performer.id);
}

export async function loadSourceCatalog() {
  const meta = await json(path.join(root, "data", "meta.json"));
  if (meta.schemaVersion !== 2) throw new Error("Unsupported data schemaVersion");
  const seriesFiles = await loadDirectory("series");
  const eventFiles = await loadDirectory("events");
  const songFiles = await loadDirectory("songs");
  const venueFiles = await loadDirectory("venues");
  const setlistFiles = await loadDirectory("setlists");
  const series = seriesFiles.map(({ value }) => value);
  const events = eventFiles.map(({ value }) => value);
  const songs = songFiles.map(({ value }) => value);
  const venues = venueFiles.map(({ value }) => value);
  const eventSongs = setlistFiles.flatMap(({ value }) =>
    value.tracks.map((track, index) => ({ ...track, eventId: value.eventId, importOrder: index + 1, performerIds: performersFor(track.vocalsText, meta.performers) })),
  );

  const rowsByEvent = new Map();
  for (const row of eventSongs) {
    const rows = rowsByEvent.get(row.eventId) ?? [];
    rows.push(row);
    rowsByEvent.set(row.eventId, rows);
  }
  for (const event of events) {
    const rows = rowsByEvent.get(event.id) ?? [];
    event.year = event.startDate ? Number(event.startDate.slice(0, 4)) : event.year;
    event.actualTrackCount = rows.length;
    event.recordedTrackCount = rows.length;
    event.mikuTrackCount = rows.filter((row) => row.performerIds.includes("PER-01")).length;
    event.mikuSoloTrackCount = rows.filter((row) => row.performanceType === "miku_solo").length;
    event.mikuCollaborationTrackCount = rows.filter((row) => row.performanceType === "miku_collaboration").length;
    event.otherTrackCount = rows.filter((row) => row.performanceType === "other").length;
    event.unknownTrackCount = rows.filter((row) => row.performanceType === "unknown").length;
    event.mikuRatio = rows.length ? event.mikuTrackCount / rows.length : null;
    event.mikuSoloRatio = rows.length ? event.mikuSoloTrackCount / rows.length : null;
    event.setlistScope = rows.length
      ? event.recordUnit === "aggregate" ? "aggregate" : event.setlistScope === "shared" ? "shared" : rows.every((row) => row.sequence !== null) ? "exact" : "presence_only"
      : "none";
  }

  const eventById = new Map(events.map((event) => [event.id, event]));
  for (const song of songs) {
    const rows = eventSongs.filter((row) => row.songId === song.id);
    const solo = rows.filter((row) => row.performanceType === "miku_solo");
    const dates = rows.map((row) => eventById.get(row.eventId)?.startDate).filter(Boolean).sort();
    const soloDates = solo.map((row) => eventById.get(row.eventId)?.startDate).filter(Boolean).sort();

    song.appearanceCount = rows.length;
    song.actualAppearanceCount = rows.length;
    song.eventIds = [...new Set(rows.map((row) => row.eventId))];
    song.seriesIds = [...new Set(rows.flatMap((row) => eventById.get(row.eventId)?.seriesId ?? []))];
    song.firstDate = dates[0] ?? null;
    song.lastDate = dates.at(-1) ?? null;
    song.soloAppearanceCount = solo.length;
    song.soloEventIds = [...new Set(solo.map((row) => row.eventId))];
    song.soloSeriesIds = [...new Set(solo.flatMap((row) => eventById.get(row.eventId)?.seriesId ?? []))];
    song.soloFirstDate = soloDates[0] ?? null;
    song.soloLastDate = soloDates.at(-1) ?? null;
  }

  const counts = {
    events: events.length,
    eventSongs: eventSongs.length,
    songs: songs.length,
    venues: venues.length,
    series: series.length,
    distinctSetlistEvents: new Set(eventSongs.map((row) => row.eventId)).size,
  };
  return {
    catalog: {
      meta: { ...meta.catalogMeta, schemaVersion: meta.schemaVersion, ...counts },
      series,
      performers: meta.performers,
      venues,
      songs,
      events,
      eventSongs,
      legacyEventMigrations: meta.legacyEventMigrations ?? [],
      legacySongMigrations: meta.legacySongMigrations ?? [],
      aliases: meta.aliases ?? [],
      scope: meta.scope ?? [],
      dataNotes: meta.dataNotes ?? [],
    },
    sourceFiles: { seriesFiles, eventFiles, songFiles, venueFiles, setlistFiles },
  };
}

export function validateCatalog(catalog, sourceFiles) {
  const errors = [];
  const duplicate = (kind, items) => {
    const seen = new Set();
    for (const item of items) {
      if (!item.id) errors.push(`${kind}: missing id`);
      else if (seen.has(item.id)) errors.push(`${kind}: duplicate id ${item.id}`);
      else seen.add(item.id);
      if (!active(item)) errors.push(`${kind}: hidden/deprecated records are not allowed in the public source (${item.id})`);
    }
  };
  duplicate("series", catalog.series);
  duplicate("event", catalog.events);
  duplicate("song", catalog.songs);
  duplicate("venue", catalog.venues);
  duplicate("setlist item", catalog.eventSongs);

  for (const { file, value } of sourceFiles.seriesFiles) if (file !== `${value.id}.json`) errors.push(`series filename mismatch: ${file}`);
  for (const { file, value } of sourceFiles.eventFiles) if (file !== `${value.id}.json`) errors.push(`event filename mismatch: ${file}`);
  for (const { file, value } of sourceFiles.songFiles) if (file !== `${value.id}.json`) errors.push(`song filename mismatch: ${file}`);
  for (const { file, value } of sourceFiles.venueFiles) if (file !== `${value.id}.json`) errors.push(`venue filename mismatch: ${file}`);
  for (const { file, value } of sourceFiles.setlistFiles) if (file !== `${value.eventId}.json`) errors.push(`setlist filename mismatch: ${file}`);

  const seriesIds = new Set(catalog.series.map((item) => item.id));
  const eventIds = new Set(catalog.events.map((item) => item.id));
  const songIds = new Set(catalog.songs.map((item) => item.id));
  const venueIds = new Set(catalog.venues.map((item) => item.id));
  const allowedPerformanceTypes = new Set(["miku_solo", "miku_collaboration", "other", "unknown"]);

  const allowedLocales = new Set(["ja", "zh", "en"]);
  const kanaCharacters = /[\p{Script=Hiragana}\p{Script=Katakana}]/u;
  const cjkCharacters = /[\p{Script=Hiragana}\p{Script=Katakana}\p{Unified_Ideograph}]/u;
  const validateI18n = (kind, item, fields) => {
    if (item.i18n === undefined) return;
    if (!item.i18n || typeof item.i18n !== "object" || Array.isArray(item.i18n)) {
      errors.push(`${kind} ${item.id}: invalid i18n`);
      return;
    }
    for (const [locale, values] of Object.entries(item.i18n)) {
      if (!allowedLocales.has(locale)) errors.push(`${kind} ${item.id}: unsupported locale ${locale}`);
      for (const field of fields) {
        const value = values?.[field];
        if (typeof value !== "string" || !value.trim()) errors.push(`${kind} ${item.id}: invalid ${locale}.${field}`);
      }
    }
  };
  for (const item of catalog.series) {
    if (!item.name?.trim()) errors.push(`series ${item.id}: missing name`);
    validateI18n("series", item, ["name"]);
  }
  for (const item of catalog.songs) {
    if (!item.title?.trim()) errors.push(`song ${item.id}: missing title`);
    validateI18n("song", item, ["title"]);
    const zhTitle = item.i18n?.zh?.title;
    const enTitle = item.i18n?.en?.title;
    if (typeof zhTitle === "string" && kanaCharacters.test(zhTitle) && zhTitle !== item.title) {
      errors.push(`song ${item.id}: zh.title must not contain hiragana or katakana unless it preserves the complete canonical title`);
    }
    if (typeof enTitle === "string" && cjkCharacters.test(enTitle)) {
      errors.push(`song ${item.id}: en.title must not contain Han characters, hiragana, or katakana`);
    }
  }
  for (const item of catalog.venues) {
    if (!item.name?.trim()) errors.push(`venue ${item.id}: missing name`);
    if (!item.city?.trim()) errors.push(`venue ${item.id}: missing city`);
    if (!item.countryRegion?.trim()) errors.push(`venue ${item.id}: missing countryRegion`);
    validateI18n("venue", item, ["name", "city", "countryRegion"]);
  }
  const sequences = new Map();
  for (const event of catalog.events) {
    if (!event.name?.trim()) errors.push(`event ${event.id}: missing name`);
    validateI18n("event", event, ["name"]);
    if (event.seriesId && !seriesIds.has(event.seriesId)) errors.push(`event ${event.id}: unknown series ${event.seriesId}`);
    if (event.venueId && !venueIds.has(event.venueId)) errors.push(`event ${event.id}: unknown venue ${event.venueId}`);
    if (!["performance", "aggregate"].includes(event.recordUnit)) errors.push(`event ${event.id}: invalid recordUnit`);
  }
  for (const row of catalog.eventSongs) {
    if (!eventIds.has(row.eventId)) errors.push(`setlist item ${row.id}: unknown event ${row.eventId}`);
    if (!songIds.has(row.songId)) errors.push(`setlist item ${row.id}: unknown song ${row.songId}`);
    if (!allowedPerformanceTypes.has(row.performanceType)) errors.push(`setlist item ${row.id}: invalid performanceType`);
    if (!row.performedTitle?.trim()) errors.push(`setlist item ${row.id}: missing performedTitle`);
    if (row.sequence !== null) {
      if (!Number.isInteger(row.sequence) || row.sequence < 1) errors.push(`setlist item ${row.id}: invalid sequence`);
      const used = sequences.get(row.eventId) ?? new Set();
      if (used.has(row.sequence)) errors.push(`event ${row.eventId}: duplicate sequence ${row.sequence}`);
      used.add(row.sequence);
      sequences.set(row.eventId, used);
    }
  }
  return errors;
}
