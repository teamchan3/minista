import type { Config } from 'tailwindcss'
import plugin from "tailwindcss/plugin"
import themeExtensions from "./tailwindcss/config"
import { extendWidthConfig } from "./tailwindcss/config/theme/width"
import customVariants from "./tailwindcss/plugins"
import isVariant from "./tailwindcss/plugins/variants/isVariant"

// カスタム型定義
type AddVariantType = (name: string, definition: any) => void;
type CustomVariant = (options: { addVariant: AddVariantType; e: (name: string) => string }) => void;

const config: Config = {
  content: {
    files: [
      "./src/**/*.{html,js,njk,md,jsx,tsx}"
    ],
  },
  theme: {
    extend: {
      ...themeExtensions,
      ...extendWidthConfig(),
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      (customVariants as CustomVariant[]).forEach((variant) => {
        variant({
          addVariant: addVariant as AddVariantType,
          e
        });
      });
    }),
    isVariant("active"),
    isVariant("loading"),
    isVariant("disabled"),
    isVariant("show"),
    isVariant("hide"),
    isVariant("hover"),
  ],
}

export default config