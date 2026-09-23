# Contributing to MikuOnly Data

**中文 | [日本語](#日本語) | [English](#english)**

感谢你帮助维护 MikuOnly 的公开演唱会与歌单数据。  
MikuOnly Data 希望尽可能保留**可验证、可追溯、不过度推测**的数据。

## 中文

### 基本规则

1. 每个 Pull Request 尽量只处理一个公演、一个数据组或一个明确的问题。
2. 修改歌单、曲序、演唱者、举办日期、会场等事实数据时，请附上来源。
3. 不要因为“同一巡演其他场次是这样”就推测当前场次。无法确认的数据请保持未知。
4. 已存在的 `event id`、`song id`、`series id`、`setlist item id` 属于稳定 ID。即使纠错导致排序变化，也不要无必要修改这些 ID。
5. 数据修正请修改 `data/` 下的源数据，再用 `npm run build` 更新 `dist/catalog.json`，不要手工编辑生成文件。文档或工具任务可修改对应文件。

### Pull Request 流程

1. Fork 本仓库
2. 创建工作分支
3. 修改 `data/` 中对应数据
4. 运行 `npm run check`
5. 在 PR 模板中写明修改内容和 Source / 出典
6. CI 通过后等待 review

管理员会对修改进行 review，必要时会提出 Request changes。  
即使 PR 已经 merge，正式发布前仍会在 MikuOnly 侧经过 draft / validation / publish 流程。

### 三语显示字段（Schema v2）

`data/songs/`、`data/series/`、`data/events/` 与 `data/venues/` 均可通过 `i18n.ja`、`i18n.zh`、`i18n.en` 维护显示字段。原始 `title` / `name` / `city` / `countryRegion` 是 canonical 值，不要为了翻译而覆盖它。Song 使用 `title`，Series / Event 使用 `name`，Venue 使用 `name`、`city`、`countryRegion`。翻译可不完整，缺失时网站会回退到 canonical 值。普通歌单曲名从 `songId` 对应的歌曲翻译取得；仅特殊演奏版本继续由 `performedTitle` 保留版本差异。

歌曲标题还应遵守以下本地化规则：

1. canonical 曲名本身以英语命名时，中文和英文显示均可直接沿用原曲名，无需为了产生不同字符串而强行翻译。
2. `i18n.zh.title` 不得包含平假名或片假名；没有稳定中文译名时，应以对应英文名替代假名部分。只有确认完全没有可用中英文译名时，才可完整保留 canonical 日文原题，不得生成中日文混合标题。
3. `i18n.en.title` 不得包含汉字、平假名或片假名，应使用英文字母表示；数字、标点和 `☆`、`・` 等无需翻译的特殊符号可以保留。

### 关于删除

已公开的公演、歌曲或会场记录不会因为社区同步而自动删除。  
如果确实需要删除错误记录，请创建 Issue，并说明删除理由及相关来源。

### 推荐的来源

优先使用：

- 官方网站或官方公告
- 官方 SNS
- Blu-ray / DVD 官方曲目
- 官方直播、配信或影像
- 可信的现场记录

如果资料没有公开 URL，请在 PR / Issue 中说明资料类型以及你确认信息的位置。

---

## 日本語

MikuOnly の公開ライブ・セットリストデータの維持に協力していただきありがとうございます。  
MikuOnly Data では、**確認可能・追跡可能で、推測に頼らないデータ**を重視しています。

### 基本ルール

1. 1つの Pull Request は、できるだけ1つの公演・1つのデータ群・1つの論点に絞ってください。
2. セットリスト、曲順、歌唱者、開催日、会場などの事実データを変更する場合は出典を付けてください。
3. 「同じツアーの別公演も同じだった」という理由だけで推測して埋めないでください。確認できないものは不明のまま残します。
4. 既存の `event id`、`song id`、`series id`、`setlist item id` は stable ID です。誤り訂正によって並び順が変わる場合でも、不要に変更しないでください。
5. データ修正は `data/` 以下を編集し、`npm run build` で `dist/catalog.json` を更新します。生成物は直接編集しません。文書・ツールの変更は対応するファイルを編集できます。

### Pull Request の流れ

1. この repository を Fork
2. 作業 branch を作成
3. `data/` を修正
4. `npm run check` を実行
5. PR template に変更内容と Source / 出典を記入
6. CI が通った状態で review を待つ

管理者が review し、必要であれば Request changes を返します。  
merge 後も、本番公開前に MikuOnly 側で draft / validation / publish を行います。

### 3言語表示フィールド（Schema v2）

`data/songs/`、`data/series/`、`data/events/`、`data/venues/` では `i18n.ja`、`i18n.zh`、`i18n.en` に表示フィールドを追加できます。元の `title` / `name` / `city` / `countryRegion` は canonical 値なので、翻訳目的で上書きしません。Song は `title`、Series / Event は `name`、Venue は `name`・`city`・`countryRegion` をローカライズします。翻訳は未完成でもよく、欠けている言語は canonical 値へ fallback します。通常のセットリスト曲名は `songId` の楽曲翻訳を使い、特殊な演奏版だけ `performedTitle` で版差分を保持します。

楽曲名のローカライズでは、英語で命名された canonical title は中国語・英語とも原題をそのまま使用できます。`i18n.zh.title` に平仮名・片仮名を含めず、安定した中国語訳がない場合は該当部分を英語名に置き換えます。利用可能な中国語名・英語名がまったく確認できない場合に限り、canonical の日本語原題全体を保持できます。中日混在の題名は作りません。`i18n.en.title` は漢字・平仮名・片仮名を含めず、英字で表記します（数字・句読点・記号は保持可能です）。

### 削除について

公開済みの公演・楽曲・会場レコードは、コミュニティ同期だけでは自動削除されません。  
誤登録の削除が必要な場合は Issue を作成し、削除理由と出典を提示してください。

### 推奨する出典

優先するもの：

- 公式サイト・公式告知
- 公式 SNS
- Blu-ray / DVD の公式曲目
- 公式配信・映像
- 信頼できる現地記録

URL がない資料の場合は、PR / Issue に資料の種類と確認箇所を説明してください。

---

## English

Thank you for helping maintain MikuOnly's public live-event and setlist data.  
MikuOnly Data prioritizes information that is **verifiable, traceable, and not based on unsupported assumptions**.

### Basic rules

1. Keep each Pull Request focused on one performance, one related data set, or one clearly defined issue whenever possible.
2. Provide a source when changing factual data such as setlists, song order, performers, dates, or venues.
3. Do not fill unknown values simply because another performance in the same tour used the same data. Leave unverifiable information unknown.
4. Existing `event id`, `song id`, `series id`, and `setlist item id` values are stable IDs. Do not change them unnecessarily, even when a correction changes ordering.
5. For data corrections, edit source files under `data/`, then update `dist/catalog.json` with `npm run build`; never hand-edit generated files. Documentation or tool tasks may edit the corresponding files.

### Pull Request workflow

1. Fork this repository
2. Create a working branch
3. Edit the relevant files under `data/`
4. Run `npm run check`
5. Describe the change and its Source in the PR template
6. Wait for review after CI passes

A maintainer will review the change and may request additional changes.  
After merge, the data still goes through MikuOnly's separate draft / validation / publish workflow before reaching production.

### Localized display fields (Schema v2)

Files under `data/songs/`, `data/series/`, `data/events/`, and `data/venues/` may provide display strings in `i18n.ja`, `i18n.zh`, and `i18n.en`. The original `title` / `name` / `city` / `countryRegion` remains canonical data and should not be overwritten merely to translate it. Songs localize `title`, Series and Events localize `name`, and Venues localize `name`, `city`, and `countryRegion`. Translations may be incomplete; missing values fall back to canonical data. Normal setlist titles resolve through the referenced `songId`; only performance-specific versions should retain distinct `performedTitle` values.

Song-title localization follows three additional rules. An English canonical title may be retained unchanged for both Chinese and English instead of being translated merely to make the strings differ. `i18n.zh.title` must not contain hiragana or katakana; use the corresponding English name where no stable Chinese rendering exists. The complete canonical Japanese title may be retained only when no usable Chinese or English name can be verified; do not construct mixed Chinese/Japanese titles. `i18n.en.title` must not contain Han characters, hiragana, or katakana and should use Latin letters; numbers, punctuation, and non-translatable symbols may remain.

### Deletions

Published event, song, or venue records are not automatically deleted through community synchronization.  
If an incorrect record should be removed, open an Issue and explain the reason with supporting sources.

### Preferred sources

Prefer sources such as:

- official websites or announcements
- official social-media accounts
- official Blu-ray / DVD track lists
- official streams or video releases
- reliable on-site records

If the source does not have a public URL, describe the type of material and where the relevant information can be verified in the PR / Issue.
