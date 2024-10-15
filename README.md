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

class 名は「c-[ コンポーネント名 ]」とする。

## コンポーネントで使う JS

基本的にはコンポーネント名と同じ class を作成し、

```javascript
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".c-carousel").forEach((element) => {
    new Carousel(element)
  })
})
```

のように関連づけるようにする。他のコンポーネントなどに影響が出ないように十分注意する。

# スタイルシート

## 記述のルール

## Custom Variants

### per

```css
.c-module {
  @apply per:w-[400px/1000px];
}
```

この場合

```css
.c-module {
  width: 40%;
}
```

と出力される

### vw

```css
.c-module {
  @apply vw:text-[20px];
}
```

DESIGN_WIDTH が 1280px の場合、
20px / 1280px \* 100vw = 1.5625vw となるため、

```css
.c-module {
  width: 1.5625vw;
}
```

と出力される

### vws

```css
.c-module {
  @apply vws:text-[20px];
}
```

DESIGN_WIDTH_SP が 375px の場合、
20px / 375px \* 100vw = 5.3333vw となるため、

```css
.c-module {
  width: 5.3333vw;
}
```

と出力される。
通常、vws はスマホでのみの適用を想定しているため、

```css
.c-module {
  @screen sm/up {
    @apply vw:text-[20px];
  }
  @screen sm/down {
    @apply vws:text-[40px];
  }
}
```

のように使用するのが正しい。

### rem

```css
.c-module {
  @apply rem:text-[20px];
}
```

### fluid

```css
.c-module {
  @apply fluid:text-[20px/32px];
}
```

デフォルトではブレークポイント「sm」から「lg」までの間で、指定したサイズの範囲内でサイズが変化する。

```css
.c-module {
  @apply fluid:text-[20px_lg/32px_xl];
}
```

のように、「\_（アンダースコア）」を使えば、ブレークポイントを指定できる。
