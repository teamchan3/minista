import { pxToRem } from "../../lib/utils"
import postcss from "postcss"

const remVariant = ({ addVariant }: { addVariant: any }) => {
  addVariant("rem", ({ container }: { container: postcss.Container }) => {
    container.walkRules((rule: postcss.Rule) => {
      rule.walkDecls((decl: postcss.Declaration) => {
        const value = parseFloat(decl.value)
        if (!isNaN(value)) {
          const remValue = pxToRem(value)
          decl.value = remValue
        }
      })
    })
  })
}

export default remVariant
