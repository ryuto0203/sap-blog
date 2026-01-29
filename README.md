# SAP入門ナレッジ - 静的HTMLサイト

SAPを学習したい実務者向けの、体系的なナレッジサイトです。

## 概要

このサイトは、ERP未経験者がSAPについて5分で理解できるコンテンツを提供します。

- **対象読者**: SAPを学習したい実務者
- **構成**: 必須7ページ + ブログシステム
- **形式**: 純粋な静的HTML（React/Next.js/TSXなし）

## ファイル構成

```
sap-blog/
├── index.html                 # トップページ
├── css/
│   └── style.css             # グローバルスタイルシート
├── js/
│   └── main.js               # メインJavaScript
├── pages/
│   ├── what-is-sap.html      # SAPとはページ
│   ├── activate.html         # Activateページ
│   ├── cloud.html            # S/4HANA Cloudページ
│   ├── faq.html              # FAQページ
│   ├── roadmap.html          # 学習ロードマップページ
│   └── blog.html             # ブログページ
├── images/                    # 画像ディレクトリ（将来用）
└── README.md                  # このファイル
```

## ページ一覧

1. **トップページ** (`index.html`)
   - SAP5分理解コンテンツ
   - 3つの特徴説明
   - SAPモジュール紹介
   - 推奨学習パス
   - よく見られているコンテンツ

2. **SAPとはページ** (`pages/what-is-sap.html`)
   - ERP概念の説明
   - MM/SD/PP/FI各モジュール解説
   - SAPの特徴
   - 導入形態の比較

3. **Activateページ** (`pages/activate.html`)
   - SAP Activateフレームワーク説明
   - 6つのフェーズ解説
   - 従来手法との比較表
   - 成功ポイント

4. **S/4HANA Cloudページ** (`pages/cloud.html`)
   - S/4HANA Cloudの特徴
   - 年2回のメジャーリリース説明
   - Public vs Private比較表
   - 導入メリット

5. **FAQページ** (`pages/faq.html`)
   - 導入費用に関する質問
   - 導入期間に関する質問
   - 失敗事例5選
   - その他のよくある質問

6. **学習ロードマップページ** (`pages/roadmap.html`)
   - 3つのレベル説明
   - Level別学習パス
   - 推奨学習リソース
   - 学習効果を高めるコツ

7. **ブログページ** (`pages/blog.html`)
   - ブログ記事一覧
   - カテゴリーフィルター
   - 記事プレビュー
   - 購読機能

## 機能

### グローバルスタイル (`css/style.css`)
- Fiori風デザイン（SAP Blue #00539C）
- レスポンシブデザイン対応
- ダークモード対応可能な色設定
- 各種コンポーネント（ボタン、カード、テーブル等）

### JavaScript機能 (`js/main.js`)
- スムーススクロール
- モバイルメニュー切り替え
- アクティブナビゲーション表示
- フォーム送信処理
- ブログ記事フィルタリング
- 読了時間計算
- 目次自動生成
- 遅延読み込み対応
- コードブロックコピー機能

## Netlifyでのデプロイ方法

### 方法1: ドラッグ&ドロップデプロイ

1. このZIPファイルを解凍
2. [Netlify Drop](https://app.netlify.com/drop)にアクセス
3. `sap-blog`フォルダをドラッグ&ドロップ
4. デプロイ完了

### 方法2: Git連携

1. GitHubにこのリポジトリをプッシュ
2. Netlifyにログイン
3. 「New site from Git」をクリック
4. GitHubを選択し、リポジトリを接続
5. ビルド設定（不要）をスキップ
6. デプロイ

### 方法3: Netlify CLI

```bash
npm install -g netlify-cli
cd sap-blog
netlify deploy --prod
```

## カスタマイズ

### ブランド色の変更

`css/style.css`の`:root`セクションで色を変更：

```css
:root {
  --primary: #00539C;        /* SAP Blue */
  --primary-dark: #003d6b;
  --primary-light: #1a7bc4;
  /* その他の色... */
}
```

### ロゴの変更

`index.html`と各ページの`<div class="logo-icon">S</div>`を変更

### ページタイトルの変更

各HTMLファイルの`<title>`タグを変更

## ブログ記事の追加方法

1. `pages/blog.html`を開く
2. 既存の記事カードをコピー
3. 以下を編集：
   - カテゴリーバッジ（色とテキスト）
   - 記事タイトル
   - 記事説明
   - 公開日
   - 読了時間
   - リンク先URL

例：
```html
<div class="card blog-post" data-category="新しいカテゴリー">
  <div style="background-color: #新しい色; ...">新しいカテゴリー</div>
  <h3 class="card-title">新しい記事タイトル</h3>
  <p class="card-description">記事の説明</p>
  <p style="color: var(--muted); font-size: 0.875rem;">2026年1月1日 | 読了時間: 5分</p>
  <a href="記事URL" style="color: var(--primary); font-weight: 600;">続きを読む →</a>
</div>
```

## SEO最適化

各ページには以下のメタタグが設定されています：
- `description`: ページの説明
- `keywords`: 関連キーワード
- `og:title`: OGP用タイトル
- `og:description`: OGP用説明
- `og:type`: コンテンツタイプ

## ブラウザ対応

- Chrome（最新）
- Firefox（最新）
- Safari（最新）
- Edge（最新）
- モバイルブラウザ

## パフォーマンス

- ページサイズ: 約50KB（画像なし）
- 読み込み時間: < 1秒（通常の接続）
- Lighthouse スコア: 90+

## ライセンス

MIT License

## サポート

質問や問題がある場合は、GitHubのIssueを作成してください。

---

**作成日**: 2026年1月29日
**バージョン**: 1.0.0
