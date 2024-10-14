# プロジェクト名

## 概要

プロジェクトの簡単な説明をここに記載します。

# 必要な依存関係をインストール

```bash
npm install
```

# プロジェクトを起動

```bash
npm run dev
```

# ビルド

```bash
npm run build
```

# コーディング

# ページ

`src/pages`に配置する。

# コンポーネント

コンポーネントは `src/components`に配置する。
その際、特別な理由がない限り、`src/components/base.tsx`を継承して実装する。

## ページ特有のコンポーネント

ページ特有のコンポーネントは `src/components/pages`に配置する。

## 共通コンポーネント

ページを跨いで利用される共通コンポーネントは `src/components/ui`に配置する。
必ずコンポーネント名のディレクトリを作成し、その中に

- JSX（コンポーネント名）
- CSS（コンポーネント名）
- JS（script.ts）

を設置する。

## コンポーネントで使う CSS

class 名は「cmp-[ コンポーネント名 ]」とする。

## コンポーネントで使う JS

基本的にはコンポーネント名と同じ class を作成し、

```javascript
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cmp-carousel").forEach((element) => {
    new Carousel(element)
  })
})
```

のように関連づけるようにする。他のコンポーネントなどに影響が出ないように十分注意する。

# スタイルシート
