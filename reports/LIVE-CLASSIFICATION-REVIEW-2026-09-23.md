# 演出形态与歌单证据复查（2026-09-23）

本次复查覆盖此前列出的 `shared`、`presence_only`、`aggregate`、`none` 场次。歌单证据状态由 `setlistScope` 表示；线上演出由 `performanceType: オンライン公演` 表示；嘉宾出演由 `roleType: ゲスト` 表示。三者可以同时出现，不能互相替代。没有明确歌单的场次保持 `tracks: []`，不推测歌曲。

## 本次依据一手资料修正的记录

| 场次 | 修正 | 依据 |
| --- | --- | --- |
| `EVT-0222` UNTITLED 0 | 标为线上演出 | [初音未来官方博客](https://blog.piapro.net/2020/07/mo202004061-1.html)记载 2020-08-09 的网络直播。 |
| `EVT-0223` ABU Song Festival | 标为线上演出 | [Crypton 公告](https://www.crypton.co.jp/cfm/news/2020/12/04abu)记载 2020 年音乐节线上配信。 |
| `EVT-0229` Coachella 2024 | 从“嘉宾”改为“音乐节出演”；保留汇总记录 | [初音未来官方演出报告](https://blog.piapro.net/2024/06/ta2406281.html)将其作为音乐节艺人，并记载 4 月 12 日与 19 日两次出演。此汇总记录不足以归属两场的每首歌曲。 |
| `EVT-0230` Ado「心臓」 | 保留“嘉宾”，将场次来源改为官方博客 | [初音未来官方博客](https://blog.piapro.net/2024/05/b2405051.html)明确称惊喜嘉宾。 |
| `EVT-0236` Project Circles Live | 移除过时的“计划”标题；从单一“嘉宾”改为“多种出演形式” | [企划官方网站](https://pjcircles.com/kt-zepp-yokohama.html)在不同节目中列出 Guest Actor 初音未来及初音未来独立出演。现有跨日汇总记录不能代表某一场的角色或曲目。 |

MIKU EXPO Online、Rewind、Rewind+、VR 原有线上标记保留。`shared` 的曲序是已公开的共用模式，尚未逐场核验；`presence_only` 只有曲目在场证据；`aggregate` 是跨演出或活动的汇总；`none` 是曲目未录入。这些状态本次不凭推测升级为逐场完整歌单。
