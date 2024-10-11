import postcssImport from "postcss-import"
import postcssNesting from "postcss-nesting"
import tailwindcss from "tailwindcss"
import postcssPresetEnv from "postcss-preset-env"

export default {
  plugins: {
    "postcss-import": postcssImport(),
    "tailwindcss/nesting": postcssNesting(),
    tailwindcss: {},
    "postcss-preset-env": {
      features: { "nesting-rules": false },
    },
  },
}
