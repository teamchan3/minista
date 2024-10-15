import screens from "./theme/screens"
import fontSize from "./theme/fontSize"
import spacing from "./theme/spacing"
import transitionProperty from "./theme/transitionProperty"
import transitionTimingFunction from "./theme/transitionTimingFunction"

// 各テーマ設定の型を定義
type Screens = typeof screens
type FontSize = typeof fontSize
type Spacing = typeof spacing
type TransitionProperty = typeof transitionProperty
type TransitionTimingFunction = typeof transitionTimingFunction

// 設定オブジェクトの型を定義
interface ThemeConfig {
  screens: Screens;
  fontSize: FontSize;
  spacing: Spacing;
  transitionProperty: TransitionProperty;
  transitionTimingFunction: TransitionTimingFunction;
}

const themeConfig: ThemeConfig = {
  screens,
  fontSize,
  spacing,
  transitionProperty,
  transitionTimingFunction,
}

export default themeConfig
