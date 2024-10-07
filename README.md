# 植物水やり通知 LINE Bot

水やりが必要な植物があれば公式 LINE から「アロエ < お水欲しいかも 🪴」のようなメッセージを送信する。

# 通知タイミング

## アロエ

- 夏(7~9 月)
  - 偶数日
- 冬(12~3 月)
  - 第 1、第 3 土曜日
- それ以外
  - 毎週土曜日

## ガジュマル

- 冬(12~3 月)
  - 第 1、第 3 土曜日
- それ以外
  - 毎週土曜日

# デプロイコマンド

- `npm run build`
- `cdk synth`
- `cdk deploy`

# 各種重要 URL

- [LINE Official Manager](https://manager.line.biz/)
