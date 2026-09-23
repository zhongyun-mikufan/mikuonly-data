## 修改内容 / 変更内容 / Changes

请简要说明本次修改。  
変更内容を簡潔に説明してください。  
Briefly describe what this Pull Request changes.

## 来源 / 出典 / Source

事实数据修改必填；文档或工具修改可填“不适用”。 / 事実データの変更時は必須。文書・ツールのみなら該当なし。 / Required for factual data changes; documentation or tool changes may use N/A.

- URL:
- 其他资料 / その他の資料 / Other material:

> 请不要根据其他场次推测未知数据。  
> 別公演から未確認データを推測しないでください。  
> Do not infer unknown data from another performance.

## Checklist

- [ ] 修改限于本次任务所需范围 / 変更は今回の目的に必要な範囲のみ / Changes are limited to the task's scope
- [ ] 没有手工修改 `dist/catalog.json` / `dist/catalog.json` を手で編集していない / I did not manually edit `dist/catalog.json`
- [ ] 没有从其他场次推测曲序或演唱者 / 別公演から曲順や歌唱者を推測していない / I did not infer song order or performers from another performance
- [ ] 没有无必要修改已有 stable ID / 既存の stable ID を不要に変更していない / I did not unnecessarily change existing stable IDs
- [ ] 已完成相关验证，并在下方记录结果或不适用原因 / 関連する検証結果または該当しない理由を以下に記載した / Relevant validation results or reasons for N/A are recorded below

## 验证 / 検証 / Validation

数据或工具修改运行 `npm run check`；仅文档修改检查相关链接与说明。CI 要求不变。 / データ・ツール変更は `npm run check`、文書のみなら関連リンクと説明を確認。CI 要件は変更なし。 / Run `npm run check` for data or tool changes; check affected links and instructions for documentation-only changes. CI requirements remain unchanged.

- 结果与未验证项 / 結果と未検証事項 / Results and unverified items:
