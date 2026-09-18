# MIKU EXPO 数据补全报告（2026-09-18）

## 任务

> 先完善所有miku expo相关的data，这是miku expo的官网，https://mikuexpo.com/，没有的数据不允许凭空捏造，官网是唯一可信信源，其它信源只允许辅助

执行原则：**只用 mikuexpo.com 取值**（含站点内的 HISTORY 页）；官网未刊载的一律留空，不做任何推测、不用任何第三方来源顶替。

## 结论摘要

| 项目 | 补全前 | 处理后 | 依据 |
|---|---|---|---|
| MIKU EXPO `startTime` 空栏 | 99 | **88 已补全 / 11 保持空栏** | 官网各巡演页的 Show / Start / 開演 / OPEN |
| 全库 `startTime` 空栏 | 120 | **32** | 同上 |
| 2014 年 `organizer` | 7 空栏 | **7 已补全** | 官网页面脚注 “Organizer: Crypton Future Media, INC.” |
| 官方有、数据集中缺失的线上巡演 | 4 巡演 / 0 条 | **新增 11 条 event** | online2021 / rewind2022 / vr2023 |
| MIKU EXPO 公演数（`meta.json` scope） | 135 | **146** | 135 + 11 |
| 会场名·城市名混入的脚注记号 | 12 处 | **12 处清除** | 记号在 `data/meta.json` 中无定义、非名称的一部分 |
| 已取消巡演 2020 USA & Canada | 未收录 | **仅报告存档，不写入 `data/`** | 见下方「已取消巡演的存档」 |
| 推测值 | — | **0 条** | 官网未刊载即留空 |

合计：`data/events/` 408 → **419**，`data/setlists/` 408 → **419**，`eventSongs` 不变（9555）。

## 官网信源一览

| 巡演 | 官网页面 | 开演时刻刊载情况 |
|---|---|---|
| 2014 Indonesia | https://mikuexpo.com/indonesia_top/indonesia_concert | 刊载（Open/Start） |
| 2014 Los Angeles | https://mikuexpo.com/la/la_concert | 刊载（START/DOORS OPEN） |
| 2014 New York | https://mikuexpo.com/ny/ny_concert | 刊载（START/DOORS OPEN） |
| 2015 Shanghai | https://mikuexpo.com/shanghai/ | ⚠ 官网无演出表（仅“coming soon”与站外链接） |
| 2016 Japan Tour | https://mikuexpo.com/jp2016/live | 刊载（開場/開演） |
| 2016 North America | https://mikuexpo.com/na2016/ | 刊载（Show/Door） |
| 2016 in Taiwan | https://mikuexpo.com/tw2016/ | 刊载（Show/Door） |
| 2016 China Tour | https://mikuexpo.com/cn2016/ | 刊载（Show のみ、Door なし） |
| 2017 in Malaysia | https://mikuexpo.com/may2017/ | 刊载（Show/Door） |
| 2018 USA & Mexico | https://mikuexpo.com/usamx2018/ | 刊载（Show/Door） |
| 2018 EUROPE | https://mikuexpo.com/europe2018/ | 刊载（Show/Door/VIP Entry） |
| 2019 Taiwan & Hong Kong | https://mikuexpo.com/twhk2019/ | ❌ 未刊载任何开演时刻 |
| 2020 EUROPE | https://mikuexpo.com/europe2020/ | 刊载（Show/Door/VIP Entry） |
| 2020 USA & Canada | https://mikuexpo.com/usaca2020/ | ❌ 全巡演取消，官网也未刊载任何时刻 |
| 2021 Online | https://mikuexpo.com/online2021/ | 刊载（OPEN 10 AM / 5 PM / 9 PM JST） |
| Rewind | https://mikuexpo.com/rewind2022/ | 刊载（START 12:30 PM / 7:30 PM / 11:30 PM JST） |
| Rewind+ | https://mikuexpo.com/rewind2022/ | 刊载（START 10:30 AM / 5:30 PM JST） |
| 2023 VR | https://mikuexpo.com/vr2023/ | 刊载（START 11:00 AM / 5:00 PM / 9:00 PM JST） |
| 2024 North America | https://mikuexpo.com/na2024/ | 刊载（Show/Door/VIP） |
| 2024 EUROPE | https://mikuexpo.com/europe2024/ | 刊载（Show/Door/VIP） |
| 2024 New Zealand & Australia | https://mikuexpo.com/nzaus2024/ | 刊载（Show/Door） |
| 2025 ASIA | https://mikuexpo.com/asia2025/ | 刊载（Show/Door/VIP） |
| 2026 North America | https://mikuexpo.com/na2026/ | 刊载（Show/Door/VIP） |
| 2026 EUROPE | https://mikuexpo.com/europe2026/ | ❌ 未刊载任何开演时刻（仅 DATE/VENUE/TICKET 三列） |

## 补全明细（88 条，依据官网补入 `startTime`）

| # | 公演 ID | 日期 | 场次 | 城市 | 会场 | 开演时刻 | 官网出典 |
|---|---|---|---|---|---|---|---|
| 1 | `EVT-0001` | 2014-05-28 | 単独公演 | Jakarta | Jakarta Convention Center | **19:30** | https://mikuexpo.com/indonesia_top/indonesia_concert |
| 2 | `EVT-0003` | 2014-10-11 | 単独公演 | Los Angeles | Nokia Theatre | **19:00** | https://mikuexpo.com/la/la_concert |
| 3 | `EVT-0004` | 2014-10-12 | 単独公演 | Los Angeles | Nokia Theatre | **12:30** | https://mikuexpo.com/la/la_concert |
| 4 | `EVT-0005` | 2014-10-17 | 単独公演 | New York City | Hammerstein Ballroom | **20:30** | https://mikuexpo.com/ny/ny_concert |
| 5 | `EVT-0006` | 2014-10-18 | 単独公演 | New York City | Hammerstein Ballroom | **18:30** | https://mikuexpo.com/ny/ny_concert |
| 6 | `EVT-0016` | 2016-04-23 | 単独公演 | Seattle | WaMu Theater | **20:00** | https://mikuexpo.com/na2016/ |
| 7 | `EVT-0018` | 2016-05-06 | 単独公演 | Los Angeles | Microsoft Theater | **20:00** | https://mikuexpo.com/na2016/ |
| 8 | `EVT-0019` | 2016-05-14 | 単独公演 | Dallas | The Bomb Factory | **20:00** | https://mikuexpo.com/na2016/ |
| 9 | `EVT-0020` | 2016-05-17 | 単独公演 | Houston | NRG Arena | **20:00** | https://mikuexpo.com/na2016/ |
| 10 | `EVT-0021` | 2016-05-20 | 単独公演 | Toronto | Sony Centre for the Performing Arts | **20:00** | https://mikuexpo.com/na2016/ |
| 11 | `EVT-0022` | 2016-05-25 | 単独公演 | Chicago | Chicago Theatre | **19:30** | https://mikuexpo.com/na2016/ |
| 12 | `EVT-0024` | 2016-06-01 | 単独公演 | Monterrey | Auditorio Banamex | **20:00** | https://mikuexpo.com/na2016/ |
| 13 | `EVT-0033` | 2017-12-16 | 単独公演 | Kuala Lumpur | Axiata Arena | **20:00** | https://mikuexpo.com/may2017/ |
| 14 | `EVT-0034` | 2018-06-29 | 夜公演 | Los Angeles | Microsoft Theater | **20:00** | https://mikuexpo.com/usamx2018/ |
| 15 | `EVT-0035` | 2018-07-01 | 単独公演 | San Jose | City National Civic | **20:00** | https://mikuexpo.com/usamx2018/ |
| 16 | `EVT-0036` | 2018-07-06 | 単独公演 | Dallas | The Bomb Factory | **20:00** | https://mikuexpo.com/usamx2018/ |
| 17 | `EVT-0037` | 2018-07-08 | 単独公演 | Cedar Park | H-E-B Center at Cedar Park | **20:00** | https://mikuexpo.com/usamx2018/ |
| 18 | `EVT-0038` | 2018-07-12 | 単独公演 | Washington, D.C. | The Anthem | **20:00** | https://mikuexpo.com/usamx2018/ |
| 19 | `EVT-0039` | 2018-07-14 | 単独公演 | New York City | Hammerstein Ballroom | **20:00** | https://mikuexpo.com/usamx2018/ |
| 20 | `EVT-0040` | 2018-07-19 | 単独公演 | Mexico City | Pepsi Center WTC | **20:00** | https://mikuexpo.com/usamx2018/ |
| 21 | `EVT-0041` | 2018-12-01 | 単独公演 | Paris | La Seine Musicale | **20:30** | https://mikuexpo.com/europe2018/ |
| 22 | `EVT-0042` | 2018-12-04 | 単独公演 | Cologne | Lanxess Arena | **20:00** | https://mikuexpo.com/europe2018/ |
| 23 | `EVT-0043` | 2018-12-08 | 単独公演 | London | Olympia London | **19:00** | https://mikuexpo.com/europe2018/ |
| 24 | `EVT-0046` | 2020-01-11 | 単独公演 | London | Brixton Academy | **20:30** | https://mikuexpo.com/europe2020/ |
| 25 | `EVT-0047` | 2020-01-16 | 単独公演 | Paris | Zénith Paris | **20:00** | https://mikuexpo.com/europe2020/ |
| 26 | `EVT-0048` | 2020-01-20 | 単独公演 | Berlin | Verti Music Hall | **20:00** | https://mikuexpo.com/europe2020/ |
| 27 | `EVT-0049` | 2020-01-24 | 単独公演 | Amsterdam | Ziggo Dome | **20:00** | https://mikuexpo.com/europe2020/ |
| 28 | `EVT-0050` | 2020-01-28 | 単独公演 | Barcelona | Sant Jordi Club | **20:00** | https://mikuexpo.com/europe2020/ |
| 29 | `EVT-0051` | 2024-04-04 | 単独公演 | Vancouver | Thunderbird Sports Centre | **20:00** | https://mikuexpo.com/na2024/ |
| 30 | `EVT-0052` | 2024-04-06 | 単独公演 | Portland | Keller Auditorium | **20:00** | https://mikuexpo.com/na2024/ |
| 31 | `EVT-0053` | 2024-04-08 | 単独公演 | San Jose | San Jose Civic | **20:00** | https://mikuexpo.com/na2024/ |
| 32 | `EVT-0054` | 2024-04-09 | 単独公演 | San Jose | San Jose Civic | **20:00** | https://mikuexpo.com/na2024/ |
| 33 | `EVT-0055` | 2024-04-14 | 単独公演 | Tempe | Mullett Arena | **20:00** | https://mikuexpo.com/na2024/ |
| 34 | `EVT-0056` | 2024-04-15 | 単独公演 | Tempe | Mullett Arena | **20:00** | https://mikuexpo.com/na2024/ |
| 35 | `EVT-0057` | 2024-04-17 | 単独公演 | Los Angeles | Shrine Auditorium | **20:00** | https://mikuexpo.com/na2024/ |
| 36 | `EVT-0058` | 2024-04-21 | 単独公演 | Denver | Mission Ballroom | **20:00** | https://mikuexpo.com/na2024/ |
| 37 | `EVT-0059` | 2024-04-22 | 単独公演 | Denver | Mission Ballroom | **20:00** | https://mikuexpo.com/na2024/ |
| 38 | `EVT-0060` | 2024-04-24 | 単独公演 | Dallas | The Factory in Deep Ellum | **20:00** | https://mikuexpo.com/na2024/ |
| 39 | `EVT-0061` | 2024-04-25 | 単独公演 | Dallas | The Factory in Deep Ellum | **20:00** | https://mikuexpo.com/na2024/ |
| 40 | `EVT-0062` | 2024-04-27 | 単独公演 | Cedar Park | H-E-B Center at Cedar Park | **20:00** | https://mikuexpo.com/na2024/ |
| 41 | `EVT-0063` | 2024-04-30 | 単独公演 | College Park | Gateway Center Arena | **20:00** | https://mikuexpo.com/na2024/ |
| 42 | `EVT-0064` | 2024-05-02 | 単独公演 | Orlando | Walt Disney Theater | **20:00** | https://mikuexpo.com/na2024/ |
| 43 | `EVT-0065` | 2024-05-05 | 単独公演 | Washington, D.C. | The Anthem | **20:00** | https://mikuexpo.com/na2024/ |
| 44 | `EVT-0066` | 2024-05-07 | 単独公演 | Newark | Prudential Center | **20:00** | https://mikuexpo.com/na2024/ |
| 45 | `EVT-0067` | 2024-05-09 | 単独公演 | Boston | Wang Theatre | **20:00** | https://mikuexpo.com/na2024/ |
| 46 | `EVT-0068` | 2024-05-12 | 単独公演 | Detroit | Fisher Theatre | **20:00** | https://mikuexpo.com/na2024/ |
| 47 | `EVT-0069` | 2024-05-14 | 単独公演 | Chicago | Auditorium Theatre | **20:00** | https://mikuexpo.com/na2024/ |
| 48 | `EVT-0070` | 2024-05-16 | 単独公演 | Toronto | Coca-Cola Coliseum | **20:00** | https://mikuexpo.com/na2024/ |
| 49 | `EVT-0071` | 2024-05-21 | 単独公演 | Mexico City | Pepsi Center WTC | **20:00** | https://mikuexpo.com/na2024/ |
| 50 | `EVT-0072` | 2024-10-26 | 単独公演 | London | Wembley Arena | **20:00** | https://mikuexpo.com/europe2024/ |
| 51 | `EVT-0073` | 2024-10-28 | 単独公演 | Brussels | ING Arena | **20:00** | https://mikuexpo.com/europe2024/ |
| 52 | `EVT-0074` | 2024-10-29 | 単独公演 | Paris | Zénith Paris | **20:00** | https://mikuexpo.com/europe2024/ |
| 53 | `EVT-0075` | 2024-10-30 | 単独公演 | Amsterdam | AFAS Live | **20:00** | https://mikuexpo.com/europe2024/ |
| 54 | `EVT-0076` | 2024-11-01 | 単独公演 | Düsseldorf | Mitsubishi Electric Halle | **20:00** | https://mikuexpo.com/europe2024/ |
| 55 | `EVT-0077` | 2024-11-02 | 単独公演 | Berlin | Uber Eats Music Hall | **20:00** | https://mikuexpo.com/europe2024/ |
| 56 | `EVT-0078` | 2024-11-15 | 単独公演 | Auckland | Spark Arena | **20:00** | https://mikuexpo.com/nzaus2024/ |
| 57 | `EVT-0079` | 2024-11-18 | 単独公演 | Brisbane | Brisbane Convention & Exhibition Centre | **20:00** | https://mikuexpo.com/nzaus2024/ |
| 58 | `EVT-0080` | 2024-11-20 | 単独公演 | Sydney | ICC Sydney Theatre | **20:00** | https://mikuexpo.com/nzaus2024/ |
| 59 | `EVT-0081` | 2024-11-22 | 単独公演 | Melbourne | John Cain Arena | **20:00** | https://mikuexpo.com/nzaus2024/ |
| 60 | `EVT-0082` | 2024-11-26 | 単独公演 | Perth | Perth Arena | **20:00** | https://mikuexpo.com/nzaus2024/ |
| 61 | `EVT-0083` | 2025-11-05 | 単独公演 | Bangkok | UOB LIVE | **20:00** | https://mikuexpo.com/asia2025/ |
| 62 | `EVT-0084` | 2025-11-08 | 単独公演 | 香港 | アジアワールド・アリーナ | **20:00** | https://mikuexpo.com/asia2025/ |
| 63 | `EVT-0085` | 2025-11-12 | 単独公演 | Jakarta | Tennis Indoor Senayan | **20:00** | https://mikuexpo.com/asia2025/ |
| 64 | `EVT-0086` | 2025-11-16 | 単独公演 | Manila | SM Mall of Asia Arena | **20:00** | https://mikuexpo.com/asia2025/ |
| 65 | `EVT-0087` | 2025-11-19 | 単独公演 | Singapore | The Star Theatre | **20:00** | https://mikuexpo.com/asia2025/ |
| 66 | `EVT-0088` | 2025-11-22 | 単独公演 | Kuala Lumpur | Idea Live KL | **19:30** | https://mikuexpo.com/asia2025/ |
| 67 | `EVT-0089` | 2025-11-26 | 単独公演 | Taipei | Taipei Arena | **19:30** | https://mikuexpo.com/asia2025/ |
| 68 | `EVT-0090` | 2025-11-29 | 単独公演 | Seoul | Hwajeong Gymnasium | **19:00** | https://mikuexpo.com/asia2025/ |
| 69 | `EVT-0091` | 2025-11-30 | 単独公演 | Seoul | Hwajeong Gymnasium | **16:00** | https://mikuexpo.com/asia2025/ |
| 70 | `EVT-0092` | 2026-04-12 | 単独公演 | Chicago | The Auditorium Theatre | **20:00** | https://mikuexpo.com/na2026/ |
| 71 | `EVT-0093` | 2026-04-13 | 単独公演 | Chicago | The Auditorium Theatre | **20:00** | https://mikuexpo.com/na2026/ |
| 72 | `EVT-0094` | 2026-04-15 | 単独公演 | Denver | Mission Ballroom | **20:00** | https://mikuexpo.com/na2026/ |
| 73 | `EVT-0095` | 2026-04-18 | 単独公演 | Vancouver | Doug Mitchell Thunderbird Sports Centre | **20:00** | https://mikuexpo.com/na2026/ |
| 74 | `EVT-0096` | 2026-04-20 | 単独公演 | Seattle | WaMu Theater | **20:00** | https://mikuexpo.com/na2026/ |
| 75 | `EVT-0097` | 2026-04-22 | 単独公演 | San Jose | San Jose Civic | **20:00** | https://mikuexpo.com/na2026/ |
| 76 | `EVT-0098` | 2026-04-23 | 単独公演 | San Jose | San Jose Civic | **20:00** | https://mikuexpo.com/na2026/ |
| 77 | `EVT-0099` | 2026-04-25 | 単独公演 | Los Angeles | Peacock Theater | **20:00** | https://mikuexpo.com/na2026/ |
| 78 | `EVT-0100` | 2026-04-26 | 単独公演 | Los Angeles | Peacock Theater | **20:00** | https://mikuexpo.com/na2026/ |
| 79 | `EVT-0101` | 2026-04-28 | 単独公演 | Glendale | Desert Diamond Arena | **20:00** | https://mikuexpo.com/na2026/ |
| 80 | `EVT-0102` | 2026-04-30 | 単独公演 | Grand Prairie | Texas Trust CU Theatre | **20:00** | https://mikuexpo.com/na2026/ |
| 81 | `EVT-0103` | 2026-05-01 | 単独公演 | Cedar Park | H-E-B Center at Cedar Park | **20:00** | https://mikuexpo.com/na2026/ |
| 82 | `EVT-0104` | 2026-05-03 | 単独公演 | Duluth | Gas South Arena | **19:00** | https://mikuexpo.com/na2026/ |
| 83 | `EVT-0105` | 2026-05-05 | 単独公演 | Washington | The Anthem | **20:00** | https://mikuexpo.com/na2026/ |
| 84 | `EVT-0106` | 2026-05-07 | 単独公演 | Newark | Prudential Center | **20:00** | https://mikuexpo.com/na2026/ |
| 85 | `EVT-0107` | 2026-05-10 | 単独公演 | Boston | Wang Theatre At The Boch Center | **20:00** | https://mikuexpo.com/na2026/ |
| 86 | `EVT-0108` | 2026-05-11 | 単独公演 | Boston | Wang Theatre At The Boch Center | **20:00** | https://mikuexpo.com/na2026/ |
| 87 | `EVT-0109` | 2026-05-13 | 単独公演 | Hamilton | TD Coliseum | **20:00** | https://mikuexpo.com/na2026/ |
| 88 | `EVT-0110` | 2026-05-19 | 単独公演 | Mexico City | Pepsi Center WTC | **20:00** | https://mikuexpo.com/na2026/ |

## 新增：官网存在但此前未收录的线上巡演（11 条）

四个巡演当天均有多场，按项目既有的「每场一个 event」惯例（`-D`/`-N`/`-3`）拆分为独立 event，`setlistVariant` 采用官网日文页的 `1回目`/`2回目`/`3回目`。

| # | 公演 ID | 巡演 | 日期 | 场次 | 官网原始表记 | `startTime` | 官网出典 |
|---|---|---|---|---|---|---|---|
| 1 | `EVT-ME-2021-0606-1` | 2021 Online | 2021-06-06 | 1回目 | 10 AM (JST) OPEN | **10:00** | https://mikuexpo.com/online2021/ |
| 2 | `EVT-ME-2021-0606-2` | 2021 Online | 2021-06-06 | 2回目 | 5 PM (JST) OPEN | **17:00** | https://mikuexpo.com/online2021/ |
| 3 | `EVT-ME-2021-0606-3` | 2021 Online | 2021-06-06 | 3回目 | 9 PM (JST) OPEN | **21:00** | https://mikuexpo.com/online2021/ |
| 4 | `EVT-ME-2022-0605-1` | Rewind | 2022-06-05 | 1回目 | 12:30 PM (JST) START | **12:30** | https://mikuexpo.com/rewind2022/ |
| 5 | `EVT-ME-2022-0605-2` | Rewind | 2022-06-05 | 2回目 | 7:30 PM (JST) START | **19:30** | https://mikuexpo.com/rewind2022/ |
| 6 | `EVT-ME-2022-0605-3` | Rewind | 2022-06-05 | 3回目 | 11:30 PM (JST) START | **23:30** | https://mikuexpo.com/rewind2022/ |
| 7 | `EVT-ME-2022-1106-1` | Rewind+ | 2022-11-06 | 1回目 | 10:30 AM (JST) START | **10:30** | https://mikuexpo.com/rewind2022/ |
| 8 | `EVT-ME-2022-1106-2` | Rewind+ | 2022-11-06 | 2回目 | 5:30 PM (JST) START | **17:30** | https://mikuexpo.com/rewind2022/ |
| 9 | `EVT-ME-2023-1112-1` | 2023 VR | 2023-11-12 | 1回目 | 11:00 AM (JST) START | **11:00** | https://mikuexpo.com/vr2023/ |
| 10 | `EVT-ME-2023-1112-2` | 2023 VR | 2023-11-12 | 2回目 | 5:00 PM (JST) START | **17:00** | https://mikuexpo.com/vr2023/ |
| 11 | `EVT-ME-2023-1112-3` | 2023 VR | 2023-11-12 | 3回目 | 9:00 PM (JST) START | **21:00** | https://mikuexpo.com/vr2023/ |

- 公演性质一律为 `performanceType: "オンライン公演"`、`city: "オンライン"`、`countryRegion: "日本"`（Sapporo 发信）。
- 配信平台取自同一官网的 [HISTORY 页](https://mikuexpo.com/history.html)：2021 Online = Twitch / YouTube / Niconico，Rewind・Rewind+・2023 VR = Twitch / YouTube。
- **官网未公开歌单**（正文页与 events 子页均无曲目表；「Detailed Time Schedule」是图片、「Guide Book」是 PDF，未做 OCR），因此 `tracks: []`、`setlistScope: "none"`，不推测任何曲目。
- 官网三页的表记：2021 Online 用 **OPEN**（不是 START），Rewind／Rewind+／2023 VR 用 **START**；均标注 JST。

## 官网未刊载开演时刻（11 条，保持空栏）

| # | 公演 ID | 日期 | 场次 | 城市 | 会场 | 状态 | 官网情况 |
|---|---|---|---|---|---|---|---|
| 1 | `EVT-0044` | 2019-05-11 | 単独公演 | New Taipei City | New Taipei City Exhibition Hall | 開催済 | 官网 CONCERT 表仅列 City / Venue / Date，无任何时刻 |
| 2 | `EVT-0045` | 2019-07-27 | 単独公演 | 香港 | スターホール | 開催済 | 官网 CONCERT 表仅列 City / Venue / Date，无任何时刻 |
| 3 | `EVT-0111` | 2026-11-12 | 単独公演 | London | The O2 Arena | 予定 | 官网仅列 DATE / VENUE / TICKET，无任何时刻 |
| 4 | `EVT-0112` | 2026-11-14 | 単独公演 | Brussels | ING Arena | 予定 | 官网仅列 DATE / VENUE / TICKET，无任何时刻 |
| 5 | `EVT-0113` | 2026-11-15 | 単独公演 | Amsterdam | AFAS Live | 予定 | 官网仅列 DATE / VENUE / TICKET，无任何时刻 |
| 6 | `EVT-0114` | 2026-11-17 | 単独公演 | Berlin | Velodrom | 予定 | 官网仅列 DATE / VENUE / TICKET，无任何时刻 |
| 7 | `EVT-0115` | 2026-11-20 | 単独公演 | Düsseldorf | PSD Bank Dome | 予定 | 官网仅列 DATE / VENUE / TICKET，无任何时刻 |
| 8 | `EVT-0116` | 2026-11-22 | 単独公演 | Paris | Accor Arena | 予定 | 官网仅列 DATE / VENUE / TICKET，无任何时刻 |
| 9 | `EVT-0117` | 2026-11-24 | 単独公演 | Madrid | Palacio Vistalegre | 予定 | 官网仅列 DATE / VENUE / TICKET，无任何时刻 |
| 10 | `EVT-0118` | 2026-11-25 | 単独公演 | Madrid | Palacio Vistalegre | 予定 | 官网仅列 DATE / VENUE / TICKET，无任何时刻 |
| 11 | `EVT-0119` | 2026-11-27 | 単独公演 | Lisbon | Sagres Campo Pequeno | 予定 | 官网仅列 DATE / VENUE / TICKET，无任何时刻 |

上述 11 条的官网页面已逐页核验（含 raw HTML 检索 `am`/`pm`/`Show`/`Door`）：**官网确实没有刊载开演时刻**，因此按公约留空。

## 已取消巡演的存档：2020 USA & Canada（不写入 `data/`）

官网页面 <https://mikuexpo.com/usaca2020/> 同时用两种方式标记中止：页面顶部的整巡演取消公告，以及**每一行**的 `Cancelled` 标签（12 个日期共 13 行）。公告原文逐字如下：

> Cancellation of HATSUNE MIKU EXPO 2020 USA & Canada […] it is with heavy hearts that we have made the decision to cancel MIKU EXPO 2020 USA & Canada. For inquiries on ticket refunds, please contact your ticket vendor.

**为什么不写进 `data/`**：`scripts/catalog-lib.mjs:111` 明确规定

```js
if (!active(item)) errors.push(`${kind}: hidden/deprecated records are not allowed in the public source (${item.id})`);
```

即公开源里**不允许**出现 `hidden` / `deprecated` 记录，而 `data/` 里目前也确实一条都没有。这与 `data/meta.json` 中「MIKU WITH YOU 2018 中止公演訂正」一条所记录的做法一致——中止公演从公开源与统计中排除。若把它们作为普通 event 写入，就会被计入公开目录与统计，等于把中止场次当成举办过的公演，与项目既定做法冲突。故此处**只存档于此报告**。

| # | 日期 | 城市 | 会场 | 官网状态 |
|---|---|---|---|---|
| 1 | 2020-09-04 | Orlando | Dr. Phillips Center for the Performing Arts | Cancelled |
| 2 | 2020-09-08 | Washington, D.C. | MGM National Harbor | Cancelled |
| 3 | 2020-09-11 | Asbury Park | Asbury Park Convention Hall | Cancelled |
| 4 | 2020-09-17 | Boston | House of Blues Boston | Cancelled |
| 5 | 2020-09-20 | Montreal | Place Bell | Cancelled |
| 6 | 2020-09-23 | Toronto | Coca-Cola Coliseum | Cancelled |
| 7 | 2020-09-25 | Chicago | Aragon Ballroom | Cancelled |
| 8 | 2020-09-30 | Vancouver | Thunderbird Arena | Cancelled |
| 9 | 2020-10-04（DAY） | San Jose | San Jose Civic | Cancelled |
| 10 | 2020-10-04（NIGHT） | San Jose | San Jose Civic | Cancelled |
| 11 | 2020-10-18 | Los Angeles | Shrine Auditorium | Cancelled |
| 12 | 2020-10-21 | Dallas | Bomb Factory | Cancelled |
| 13 | 2020-10-24 | Atlanta | Gateway Center Arena | Cancelled |

官网该页**未刊载任何时刻**（正文中唯一的 `Door` 字样位于 HTML 注释里的 `Show: 00:00PM Door: 00:00PM` 模板，非展示内容），也未公开歌单。

## 主催者（organizer）补全（7 条）

仅 2014 年三个巡演页在脚注中印有 “Organizer: Crypton Future Media, INC.”。其余全部巡演页（含 2016–2026 与四个线上巡演页）对 Organizer / 主催 / Presented by 检索均为 0 命中，故保持 `null`。

| # | 公演 ID | 日期 | organizer | 出典 |
|---|---|---|---|---|
| 1 | `EVT-0001` | 2014-05-28 | Crypton Future Media, INC. | https://mikuexpo.com/indonesia_top/indonesia_concert |
| 2 | `EVT-0002-D` | 2014-05-29 | Crypton Future Media, INC. | https://mikuexpo.com/indonesia_top/indonesia_concert |
| 3 | `EVT-0002-N` | 2014-05-29 | Crypton Future Media, INC. | https://mikuexpo.com/indonesia_top/indonesia_concert |
| 4 | `EVT-0003` | 2014-10-11 | Crypton Future Media, INC. | https://mikuexpo.com/la/la_concert |
| 5 | `EVT-0004` | 2014-10-12 | Crypton Future Media, INC. | https://mikuexpo.com/la/la_concert |
| 6 | `EVT-0005` | 2014-10-17 | Crypton Future Media, INC. | https://mikuexpo.com/ny/ny_concert |
| 7 | `EVT-0006` | 2014-10-18 | Crypton Future Media, INC. | https://mikuexpo.com/ny/ny_concert |

## 会场名·城市名记号清除（12 处）

这些 `[i]` / `[ii]` / `[iii]` / `[es]` 是导入时从 Excel 脚注带进来的残留记号，在 `data/meta.json` 里没有任何对应定义，也不是名称的一部分，故予清除（未改动名称本身）。

| 记录 | 字段 | 清除前 | 清除后 |
|---|---|---|---|
| `EVT-0025-D` / `EVT-0025-N` / `EVT-0026` | `venueName` | `El Plaza Condesa [es]` | `El Plaza Condesa` |
| `EVT-0037` / `EVT-0062` | `city` | `Cedar Park[i]` | `Cedar Park` |
| `EVT-0055` / `EVT-0056` | `city` | `Tempe[ii]` | `Tempe` |
| `EVT-0063` | `city` | `College Park[iii]` | `College Park` |
| `VEN-0018` | `name` | `El Plaza Condesa [es]` | `El Plaza Condesa` |
| `VEN-0024` | `city` | `Cedar Park[i]` | `Cedar Park` |
| `VEN-0039` | `city` | `Tempe[ii]` | `Tempe` |
| `VEN-0043` | `city` | `College Park[iii]` | `College Park` |

## 已知差异（本次未改动）

下列记录日期一致、会场指向同一实体，只是命名粒度不同（官网多用都市圈名或简称），按「不改动既有数据」处理：

| 公演 ID | 字段 | 现有值 | 官网值 |
|---|---|---|---|
| `EVT-0055` / `EVT-0056` | `city` | Tempe | Phoenix, AZ（同一 Mullett Arena） |
| `EVT-0063` | `city` | College Park | Atlanta, GA（同一 Gateway Center Arena） |
| `EVT-0037` | `city` / `venueName` | Cedar Park / H-E-B Center at Cedar Park | Austin, TX / H-E-B Center |
| `EVT-0064` | `venueName` | Walt Disney Theater | Walt Disney Theatre |
| `EVT-0072` | `venueName` | Wembley Arena | OVO Arena Wembley |
| `EVT-0074` | `venueName` | Zénith Paris | Zénith - Paris La Villette |
| `EVT-0046` | `venueName` | Brixton Academy | O2 Academy Brixton |
| `EVT-0082` | `venueName` | Perth Arena | RAC Arena |
| `EVT-0042` | `venueName` | Lanxess Arena | LANXESS arena |
| `EVT-0022` | `venueName` | Chicago Theatre | The Chicago Theatre |

### 2015 Shanghai 的官网局限

`https://mikuexpo.com/shanghai/` 只有 “coming soon” 图形与站外链接（scla.com.cn），**没有演出表**。现有 `EVT-0007-D/N`、`EVT-0008-D/N` 的时刻来自 `https://blog.piapro.net/2015/06/z1506032-1.html`（Crypton 官方博客，非 mikuexpo.com），本次未改动它们。

### 2014 洛杉矶官网自身的门开时刻矛盾

`/la/` 印 “12:30pm (DOORS OPEN 11:30am)”，`/la/la_concert` 印 “12:30pm (DOORS OPEN 11:30pm)”。两页的**开演时刻一致（12:30pm）**，故只取开演时刻；门开矛盾原样记录，未做推断。

### 官网根索引另有 `10th/`

根索引列出 “HATSUNE MIKU EXPO 10th Anniversary → `10th/`”，该页是纪念企划／征集页，**没有演出日程**，判定为非公演，未收录。

## 校验

- `npm run build` 与 `npm run validate` 均通过（`ok: true`；events 419 / eventSongs 9555 / songs 437 / venues 111 / series 12）。
- `data/meta.json`：`scope` 的 MIKU EXPO 行由 135 改为 146（公演单位同步），并追加 2 条 `dataNotes` 作为变更记录。
- `dist/catalog.json` 为重新生成物，未手工编辑。
- 未添加任何曲目记录，`eventSongs` 保持 9555；未做任何推测性填值。
- 顺带发现（未修改）：`scope` 中 MIKU WITH YOU 行为 41，而实际 `SER-010` 公演为 42 条。
