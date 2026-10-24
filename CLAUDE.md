# website

陳間時光（MorningFunGame）的遊戲宣傳網站，公開 repo，GitHub Pages 發布 `docs/`。

完整規則與專案筆記在私人 repo `MorningFunGame/claude-notes` 的 `CLAUDE.md`，開工前先讀。
本 repo 是公開的：不放密碼、金鑰、信箱、費用或任何個人資料。

- 新遊戲：複製 `docs/games/game-template/` 到 `docs/games/<slug>/`，再到 `docs/index.html` 加卡片。
- 新日誌：複製 `docs/devlog/post-template/` 到 `docs/devlog/<yyyy-mm-dd-slug>/`，再到 `docs/devlog/index.html` 加卡片。
- 不用「Tetris」字樣（商標），改用 falling-block puzzle。
- 推送前跑 `python3 scripts/check_links.py`。
