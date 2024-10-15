import { pxToVWSp } from "../../lib/utils"
import postcss from "postcss"

const vwsVariant = ({ addVariant }: { addVariant: any }) => {
  addVariant("vws", ({ container }: { container: postcss.Container }) => {
    container.walkRules((rule: postcss.Rule) => {
      rule.walkDecls((decl: postcss.Declaration) => {
        const value = parseFloat(decl.value)
        if (!isNaN(value)) {
          const vwValue = pxToVWSp(value)
          decl.value = vwValue
        }
      })
    })
  })
}

export default vwsVariant
