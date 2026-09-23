# Agent maintenance rules

## Scope and reading

- This repository contains public catalog data and its validation tools, not the MikuOnly application or production user data. Never add secrets, private exports, runtime stores, or private tombstones.
- Check `git status` and relevant diffs before editing; preserve unrelated work and keep it out of commits.
- Read [README.md](README.md) for orientation. For data changes, read the relevant sections of [CONTRIBUTING.md](CONTRIBUTING.md); inspect scripts or historical reports only when the task needs them.

## Data and validation

- Preserve stable IDs and canonical names. Support factual corrections with sources; leave unverifiable facts unknown. Localization details belong in CONTRIBUTING.md.
- Edit source data, never hand-edit `dist/catalog.json`. Generate it with `npm run build` when data changes, and include the generated diff.
- For data or tool changes, run `npm run check` and any relevant tool checks. For documentation-only changes, check affected links, paths, commands, and consistency. Keep existing CI requirements; do not repeat successful checks without new changes or failures.

## Autonomy and completion

- Complete local reading, edits, and validation within the authorized task. Remote pushes, merges, branch deletion, and production changes require authorization; existing session authorization remains valid within its scope.
- Ask when the target or scope changes, or proceeding could overwrite someone else's work. Do not guess unresolved data or product decisions.
- Use the repository's PR and review process. A merge does not publish the live catalog; production import and publication are separate operations.
- Report the result, validation and anything unverified. Distinguish local changes, push, merge, and production publication; complete only the stages requested for the task.
