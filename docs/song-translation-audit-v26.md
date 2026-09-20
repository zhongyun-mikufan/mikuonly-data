# Song Translation Audit v26

> Generated for review. Only the four P0 English misassignments listed below are changed in data by this branch. The 143-row recommendations are NOT bulk-applied.

## Policy

- Priority: official/localized source > Project SEKAI > VocaDB > Vocaloid Wiki > Bilibili/community.
- TRANSLATE: evidence is strong enough to recommend a concrete localized display title.
- KEEP_ORIGINAL: checked sources do not show a stable localized name, or official/community sources commonly retain the original.
- REVIEW: a plausible community/romanized rendering exists, but it is not stable enough for automatic adoption.
- Never change canonical title or stable IDs solely for localization.
- Bilibili search API returned stable results for 26 candidates before rate limiting (HTTP 412). The audit does not bypass that anti-bot restriction; remaining rows rely on official/PJSK/VocaDB/Vocaloid Wiki and ordinary indexed web evidence where available.

## P0 English corrections already safe to apply

| Song ID | Canonical | Wrong current EN | Corrected EN | Confidence | Basis |
|---|---|---|---|---|---|
| SONG-0424 | 黙ってロックをやれって言ってんの！ | Hatsune Miku "Magical Mirai 2025" OFFICIAL ALBUM | DO THE ROCK! | high | VocaDB exact + Vocaloid Lyrics Wiki Official English |
| SONG-0446 | 南部牛追歌 | Hatsune Miku × Kodo Taiko Special Live 2018 | Nanbu Ushioi Uta | high | VocaDB exact romanization; avoids unsupported literal translation |
| SONG-0449 | いのち もやしてたたけよ | Hatsune Miku × Kodo Taiko Special Live 2023 | Inochi Moyashite Tatake yo | medium | No stable official English title found; romanization is safer than event-name misassignment |
| SONG-0466 | こたえて | Hatsune Miku "Magical Mirai 2026" OFFICIAL ALBUM | Answer Me | high | Magical Mirai 2026 official English + VocaDB |

## Audit summary

- Candidate songs: **143**
- Chinese gaps: **127** -> TRANSLATE 22, REVIEW 5, KEEP_ORIGINAL 100
- English gaps: **28** -> TRANSLATE 19, REVIEW 2, KEEP_ORIGINAL 7
- Full machine-readable review sheet: [song-translation-audit-v26.csv](./song-translation-audit-v26.csv)

## Recommended changes / review items

| Plays | Song ID | Canonical | Suggested zh | zh | Suggested en | en | Confidence |
|---:|---|---|---|---|---|---|---|
| 81 | SONG-0454 | Hand in Hand（初音ミク単独版） | Hand in Hand（初音未来单独版） | TRANSLATE | Hand in Hand (Hatsune Miku Solo Version) | TRANSLATE | high/high |
| 63 | SONG-0229 | それがあなたの幸せとしても | 即便那就是你的幸福 | TRANSLATE | Sorega Anata No Shiawase To Shitemo | CURRENT | high/high |
| 53 | SONG-0258 | ハイパーリアリティショウ | 超现实主义 | REVIEW | Hyper Reality Show | CURRENT | low/high |
| 51 | SONG-0054 | Hand in Hand（6人版） | Hand in Hand（6人版） | CURRENT | Hand in Hand (6-Vocalist Version) | TRANSLATE | high/medium |
| 36 | SONG-0336 | 愛の詩 | 爱之诗 | TRANSLATE | Love Song | CURRENT | medium/high |
| 35 | SONG-0212 | ジェミニ | 双子座 | REVIEW | Gemini | CURRENT | medium/high |
| 34 | SONG-0310 | ゆめゆめ | 梦想 | REVIEW | Dream Dream | CURRENT | low/high |
| 33 | SONG-0217 | すーぱーぬこになれんかった | 没能成为超级猫咪 | TRANSLATE | Wasn't able to become a Super Nuko. | CURRENT | high/high |
| 31 | SONG-0305 | メランコリック | 忧郁的心情 | TRANSLATE | Melancholic | CURRENT | medium/high |
| 31 | SONG-0387 | 星屑ユートピア | 星屑乌托邦 | TRANSLATE | Stardust Utopia | CURRENT | medium/high |
| 29 | SONG-0385 | 星のカケラ | 星之碎片 | TRANSLATE | Fragments of a Star | TRANSLATE | high/medium |
| 28 | SONG-0028 | COME BACK~重返巅峰~ (COME BACK ~Chóng Fǎn Diānfēng~) | COME BACK~重返巅峰~ (COME BACK ~Chóng Fǎn Diānfēng~) | CURRENT | COME BACK ~Returning to the Peak~ | TRANSLATE | high/high |
| 28 | SONG-0354 | 月西江 (Yuè Xī Jiāng) | 月西江 (Yuè Xī Jiāng) | CURRENT | Moon West River | TRANSLATE | high/high |
| 27 | SONG-0231 | タイムマシン | 时光机 | TRANSLATE | Time Machine | CURRENT | medium/high |
| 26 | SONG-0188 | カラフル×メロディ | 多彩×旋律 | TRANSLATE | Colorful × Melody | CURRENT | medium/high |
| 22 | SONG-0403 | 独りんぼエンヴィー | 孑然妒火 | TRANSLATE | Hitorinbo Envy | CURRENT | high/high |
| 21 | SONG-0283 | フロイライン＝ビブリォチカ (Fräulein=Biblioteca) | フロイライン＝ビブリォチカ (Fräulein=Biblioteca) | KEEP_ORIGINAL | Fräulein＝Biblioteca | TRANSLATE | low/high |
| 20 | SONG-0368 | 私の恋はヘルファイア | 我的爱是地狱业火 | TRANSLATE | My love is Hellfire | CURRENT | high/high |
| 20 | SONG-0376 | 初嵐 (Chūlán) | 初嵐 (Chūlán) | CURRENT | First Storm | TRANSLATE | high/high |
| 19 | SONG-0381 | 深海シティアンダーグラウンド | 深海City Underground | REVIEW | Deep sea city under ground | CURRENT | medium/high |
| 17 | SONG-0304 | メテオ (Meteor) | 流星 | TRANSLATE | Meteor | TRANSLATE | medium/high |
| 11 | SONG-0158 | アルビノ | 白色异种 | TRANSLATE | Albino | CURRENT | medium/high |
| 10 | SONG-0286 | ぼかろころしあむ | VOCALOID竞技场 | TRANSLATE | Vocalo-Colosseum | CURRENT | medium/high |
| 6 | SONG-0190 | きみとそらをとぶ | 与你翱游天际 | TRANSLATE | Fly With You | CURRENT | high/high |
| 6 | SONG-0198 | クロスロード | 交叉路口 | TRANSLATE | Crossroad | CURRENT | medium/high |
| 6 | SONG-0226 | スパイラル・メロディーズ | 螺旋旋律 | TRANSLATE | Spiral Melodies | CURRENT | medium/high |
| 6 | SONG-0237 | チャンピオン | 冠军 | TRANSLATE | Champion | CURRENT | high/high |
| 6 | SONG-0301 | むげんのチケット | 无限船票 | TRANSLATE | Mugen no Chiketto | CURRENT | high/high |
| 6 | SONG-0448 | 巡 -MEGURU- | 巡 -MEGURU- | CURRENT | MEGURU | TRANSLATE | high/high |
| 5 | SONG-0445 | 三宅 | 三宅 | CURRENT | Miyake | TRANSLATE | high/high |
| 4 | SONG-0272 | ファインダー (DSLR remix-re:edit) | ファインダー (DSLR remix-re:edit) | KEEP_ORIGINAL | finder (DSLR remix-re:edit) | TRANSLATE | low/high |
| 3 | SONG-0092 | NEPPUU～熱風～ | NEPPUU 热风 | CURRENT | NEPPUU ~Blistering Wind~ | TRANSLATE | high/medium |
| 3 | SONG-0149 | アイドル戦士 | アイドル戦士 | KEEP_ORIGINAL | Idol Warrior | TRANSLATE | low/medium |
| 3 | SONG-0447 | 能菅＋平胴 | 能菅＋平胴 | CURRENT | 能菅＋平胴 | KEEP_ORIGINAL | high/low |
| 3 | SONG-0450 | LION（獅子吼） | LION（獅子吼） | CURRENT | LION | TRANSLATE | high/high |
| 2 | SONG-0208 | サヨナラ・グッバイ | 再见・Goodbye | REVIEW | Sayonara Goodbye | CURRENT | medium/high |
| 2 | SONG-0259 | ハオ | 好 | TRANSLATE | HAO | CURRENT | high/high |
| 2 | SONG-0317 | ラビットホール (Reloaded) | Rabbit Hole (Reloaded) | CURRENT | Rabbit Hole (Reloaded) | TRANSLATE | high/high |
| 2 | SONG-0441 | 你好 (Nǐhǎo) | 你好 (Nǐhǎo) | CURRENT | Hello | TRANSLATE | high/high |
| 1 | SONG-0175 | ウララ | ウララ | KEEP_ORIGINAL | URARA | TRANSLATE | low/medium |
| 1 | SONG-0350 | 既成事実三部作MegaMix | 既成事実三部作MegaMix | CURRENT | 既成事実三部作MegaMix | KEEP_ORIGINAL | high/low |
| 1 | SONG-0361 | 再来一单 | 再来一单 | CURRENT | 再来一单 | KEEP_ORIGINAL | high/low |
| 1 | SONG-0366 | 四秒之眷 | 四秒之眷 | CURRENT | Four Seconds of Care | REVIEW | high/low |
| 1 | SONG-0394 | 創聖のアクエリオン | 创圣的大天使 | TRANSLATE | Genesis of Aquarion | TRANSLATE | high/high |
| 1 | SONG-0399 | 電気の恋人 -I am Programmer's Song- | 电气的恋人 -I am Programmer's Song- | CURRENT | 電気の恋人 -I am Programmer's Song- | KEEP_ORIGINAL | high/medium |
| 1 | SONG-0413 | 筆おろし | 筆おろし | KEEP_ORIGINAL | Fudeoroshi | REVIEW | low/medium |
| 1 | SONG-0427 | 与你同行～B With U～ | 与你同行～B With U～ | CURRENT | 与你同行～B With U～ | KEEP_ORIGINAL | high/high |
| 1 | SONG-0436 | 恋は戦争 (future retro remix by kz) | 恋爱战争 (future retro remix by kz) | TRANSLATE | Love is War (future retro remix by kz) | TRANSLATE | medium/high |

## Titles recommended to keep original

These were checked against the same sources but no stable target-language title was strong enough to recommend. Keeping the original is deliberate, not a missing-field fallback.

| Plays | Song ID | Canonical | zh decision | en decision |
|---:|---|---|---|---|
| 55 | SONG-0007 | 39みゅーじっく！ | KEEP_ORIGINAL | CURRENT |
| 53 | SONG-0315 | ラッキー☆オーブ | KEEP_ORIGINAL | CURRENT |
| 49 | SONG-0195 | キレキャリオン | KEEP_ORIGINAL | CURRENT |
| 44 | SONG-0326 | レッドランドマーカー | KEEP_ORIGINAL | CURRENT |
| 41 | SONG-0319 | リテラシー | KEEP_ORIGINAL | CURRENT |
| 38 | SONG-0152 | あったかいと | KEEP_ORIGINAL | CURRENT |
| 35 | SONG-0265 | ピアノ×フォルテ×スキャンダル | KEEP_ORIGINAL | CURRENT |
| 35 | SONG-0312 | ラストラス | KEEP_ORIGINAL | CURRENT |
| 31 | SONG-0294 | みかぼし | KEEP_ORIGINAL | CURRENT |
| 30 | SONG-0275 | フェレス | KEEP_ORIGINAL | CURRENT |
| 30 | SONG-0318 | ラムネイドブルーの憧憬 | KEEP_ORIGINAL | CURRENT |
| 26 | SONG-0168 | いいねってYEAH! | KEEP_ORIGINAL | CURRENT |
| 26 | SONG-0256 | ノヴァ | KEEP_ORIGINAL | CURRENT |
| 25 | SONG-0162 | アンテナ39 | KEEP_ORIGINAL | CURRENT |
| 25 | SONG-0269 | ビバハピ | KEEP_ORIGINAL | CURRENT |
| 25 | SONG-0429 | 陽だまりのセツナ | KEEP_ORIGINAL | CURRENT |
| 24 | SONG-0386 | 星空クロノグラフ | KEEP_ORIGINAL | CURRENT |
| 23 | SONG-0277 | フューチャー・イヴ | KEEP_ORIGINAL | CURRENT |
| 22 | SONG-0192 | キミペディア | KEEP_ORIGINAL | CURRENT |
| 21 | SONG-0254 | ネクストネスト | KEEP_ORIGINAL | CURRENT |
| 21 | SONG-0283 | フロイライン＝ビブリォチカ (Fräulein=Biblioteca) | KEEP_ORIGINAL | TRANSLATE |
| 21 | SONG-0313 | ラズベリー*モンスター | KEEP_ORIGINAL | CURRENT |
| 20 | SONG-0252 | トリノコシティ | KEEP_ORIGINAL | CURRENT |
| 19 | SONG-0302 | メインキャラクター | KEEP_ORIGINAL | CURRENT |
| 18 | SONG-0191 | きみとぼくのレゾナンス | KEEP_ORIGINAL | CURRENT |
| 18 | SONG-0293 | まるいうなばら | KEEP_ORIGINAL | CURRENT |
| 18 | SONG-0349 | 完全性コンプレックス | KEEP_ORIGINAL | CURRENT |
| 18 | SONG-0455 | ドーピングダンス | KEEP_ORIGINAL | CURRENT |
| 18 | SONG-0457 | バッドシャーク | KEEP_ORIGINAL | CURRENT |
| 18 | SONG-0463 | エル・タンゴ・エゴイスタ | KEEP_ORIGINAL | CURRENT |
| 18 | SONG-0465 | 空に免じて | KEEP_ORIGINAL | CURRENT |
| 18 | SONG-0466 | こたえて | KEEP_ORIGINAL | CURRENT |
| 17 | SONG-0172 | ヴァニッシュ | KEEP_ORIGINAL | CURRENT |
| 17 | SONG-0199 | げんてん | KEEP_ORIGINAL | CURRENT |
| 17 | SONG-0222 | ストリートライト | KEEP_ORIGINAL | CURRENT |
| 17 | SONG-0253 | なりすましゲンガー | KEEP_ORIGINAL | CURRENT |
| 17 | SONG-0276 | プシ | KEEP_ORIGINAL | CURRENT |
| 17 | SONG-0311 | ラヴィ | KEEP_ORIGINAL | CURRENT |
| 16 | SONG-0325 | レイニースノードロップ | KEEP_ORIGINAL | CURRENT |
| 16 | SONG-0359 | 混沌ブギ | KEEP_ORIGINAL | CURRENT |
| 15 | SONG-0160 | ある計画は今も密かに | KEEP_ORIGINAL | CURRENT |
| 15 | SONG-0213 | シャボン | KEEP_ORIGINAL | CURRENT |
| 15 | SONG-0378 | 心がどっか寂しいんだ | KEEP_ORIGINAL | CURRENT |
| 12 | SONG-0016 | Birthday Song for ミク | KEEP_ORIGINAL | CURRENT |
| 12 | SONG-0245 | どうぶつ占い | KEEP_ORIGINAL | CURRENT |
| 12 | SONG-0284 | ヘッジホッグ | KEEP_ORIGINAL | CURRENT |
| 11 | SONG-0206 | サイハテ | KEEP_ORIGINAL | CURRENT |
| 8 | SONG-0001 | ＊ハロー、プラネット。 | KEEP_ORIGINAL | CURRENT |
| 8 | SONG-0285 | ぽかぽかの星 | KEEP_ORIGINAL | CURRENT |
| 7 | SONG-0290 | マージナル | KEEP_ORIGINAL | CURRENT |
| 6 | SONG-0179 | エスパーエスパー | KEEP_ORIGINAL | CURRENT |
| 6 | SONG-0182 | オーパーツ | KEEP_ORIGINAL | CURRENT |
| 6 | SONG-0186 | ガッチュー！ | KEEP_ORIGINAL | CURRENT |
| 6 | SONG-0200 | ゴー！ビッパ団 | KEEP_ORIGINAL | CURRENT |
| 6 | SONG-0214 | しんかしんかしんか | KEEP_ORIGINAL | CURRENT |
| 6 | SONG-0233 | たびだちのうた | KEEP_ORIGINAL | CURRENT |
| 6 | SONG-0234 | たびのまえ、たびのあと | KEEP_ORIGINAL | CURRENT |
| 6 | SONG-0246 | ドキドキ！ | KEEP_ORIGINAL | CURRENT |
| 6 | SONG-0271 | ひゅ〜どろどろ | KEEP_ORIGINAL | CURRENT |
| 6 | SONG-0274 | ファサード・クエスチョン | KEEP_ORIGINAL | CURRENT |
| 6 | SONG-0298 | ミライどんなだろう | KEEP_ORIGINAL | CURRENT |
| 6 | SONG-0307 | メロメロイド | KEEP_ORIGINAL | CURRENT |
| 6 | SONG-0345 | 俺ゴーストタイプ | KEEP_ORIGINAL | CURRENT |
| 6 | SONG-0433 | 恋スルVOC＠LOID | KEEP_ORIGINAL | CURRENT |
| 5 | SONG-0262 | パズル | KEEP_ORIGINAL | CURRENT |
| 5 | SONG-0333 | ワンダーランドと羊の歌 | KEEP_ORIGINAL | CURRENT |
| 5 | SONG-0388 | 聖槍爆裂ボーイ | KEEP_ORIGINAL | CURRENT |
| 4 | SONG-0221 | ステラ | KEEP_ORIGINAL | CURRENT |
| 4 | SONG-0241 | テレカクシ思春期 | KEEP_ORIGINAL | CURRENT |
| 4 | SONG-0272 | ファインダー (DSLR remix-re:edit) | KEEP_ORIGINAL | TRANSLATE |
| 3 | SONG-0149 | アイドル戦士 | KEEP_ORIGINAL | TRANSLATE |
| 3 | SONG-0171 | インビテーション！ | KEEP_ORIGINAL | CURRENT |
| 3 | SONG-0197 | クローバー♣クラブ | KEEP_ORIGINAL | CURRENT |
| 3 | SONG-0211 | シアンブルー | KEEP_ORIGINAL | CURRENT |
| 3 | SONG-0362 | 祭りだヘイカモン | KEEP_ORIGINAL | CURRENT |
| 3 | SONG-0443 | 蜂の風 | KEEP_ORIGINAL | KEEP_ORIGINAL |
| 3 | SONG-0447 | 能菅＋平胴 | CURRENT | KEEP_ORIGINAL |
| 3 | SONG-0449 | いのち もやしてたたけよ | KEEP_ORIGINAL | CURRENT |
| 2 | SONG-0184 | おじゃま虫 | KEEP_ORIGINAL | CURRENT |
| 2 | SONG-0207 | サウンド | KEEP_ORIGINAL | CURRENT |
| 2 | SONG-0224 | ストロボナイツ | KEEP_ORIGINAL | CURRENT |
| 2 | SONG-0232 | タイムリミット | KEEP_ORIGINAL | CURRENT |
| 2 | SONG-0236 | チェリーポップ | KEEP_ORIGINAL | CURRENT |
| 2 | SONG-0243 | テレパシ | KEEP_ORIGINAL | CURRENT |
| 2 | SONG-0257 | ハートアラモード | KEEP_ORIGINAL | CURRENT |
| 2 | SONG-0263 | ハト | KEEP_ORIGINAL | CURRENT |
| 2 | SONG-0291 | マシュマロ | KEEP_ORIGINAL | CURRENT |
| 2 | SONG-0297 | みくみく菌にご注意! | KEEP_ORIGINAL | CURRENT |
| 2 | SONG-0339 | 愛迷エレジー (Reloaded) | KEEP_ORIGINAL | CURRENT |
| 2 | SONG-0370 | 弱虫モンブラン (Reloaded) | KEEP_ORIGINAL | CURRENT |
| 1 | SONG-0065 | intro (デP Megamix) | KEEP_ORIGINAL | KEEP_ORIGINAL |
| 1 | SONG-0153 | アドバンス | KEEP_ORIGINAL | CURRENT |
| 1 | SONG-0161 | アングレイデイズ | KEEP_ORIGINAL | CURRENT |
| 1 | SONG-0175 | ウララ | KEEP_ORIGINAL | TRANSLATE |
| 1 | SONG-0244 | とある娼婦の恋 | KEEP_ORIGINAL | CURRENT |
| 1 | SONG-0292 | またね | KEEP_ORIGINAL | CURRENT |
| 1 | SONG-0322 | リンリンシグナル | KEEP_ORIGINAL | CURRENT |
| 1 | SONG-0350 | 既成事実三部作MegaMix | CURRENT | KEEP_ORIGINAL |
| 1 | SONG-0352 | 牛乳飲め！ | KEEP_ORIGINAL | CURRENT |
| 1 | SONG-0361 | 再来一单 | CURRENT | KEEP_ORIGINAL |
| 1 | SONG-0364 | 桜日和とタイムマシン | KEEP_ORIGINAL | CURRENT |
| 1 | SONG-0399 | 電気の恋人 -I am Programmer's Song- | CURRENT | KEEP_ORIGINAL |
| 1 | SONG-0413 | 筆おろし | KEEP_ORIGINAL | REVIEW |
| 1 | SONG-0423 | 木枯らしの朝 | KEEP_ORIGINAL | CURRENT |
| 1 | SONG-0427 | 与你同行～B With U～ | CURRENT | KEEP_ORIGINAL |

## Notes on sources

- The CSV contains per-row source summaries and direct source URLs for PJSK/VocaDB/Vocaloid Wiki/Bilibili where available.
- Same-title collisions were manually treated as risky; producer/vocalist context was used to avoid selecting unrelated songs.
- Community aliases are not promoted when search results are visibly contaminated by unrelated works.
