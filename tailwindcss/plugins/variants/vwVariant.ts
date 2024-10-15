import { pxToVW } from "../../lib/utils"
import postcss from "postcss"

const vwVariant = ({ addVariant }: { addVariant: any }) => {
  addVariant("vw", ({ container }: { container: postcss.Container }) => {
    container.walkRules((rule: postcss.Rule) => {
      rule.walkDecls((decl: postcss.Declaration) => {
        const value = parseFloat(decl.value)
        if (!isNaN(value)) {
          const vwValue = pxToVW(value)
          decl.value = vwValue
        }
      })
    })
  })
}

export default vwVariant
