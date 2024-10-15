import postcssImport from "postcss-import"
import postcssNesting from "postcss-nesting"
import tailwindcss from "tailwindcss"
import postcssPresetEnv from "postcss-preset-env"
import autoprefixer from "autoprefixer"

export default {
  plugins: {
    "postcss-import": postcssImport(),
    "tailwindcss/nesting": postcssNesting(),
    tailwindcss: {},
    autoprefixer: autoprefixer({
      flexbox: "no-2009",
      features: {
        clamp: false,
      },
    }),
    "postcss-preset-env": {
      features: {
        "nesting-rules": false,
        clamp: false, // clamp()関数を保持する
      },
      // 最新の機能を有効にする
      stage: 0,
      // 最新のブラウザをターゲットにする
      browsers: "last 2 versions",
    },
  },
}
