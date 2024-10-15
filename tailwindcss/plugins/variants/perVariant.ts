import postcss from "postcss"

interface VariantOptions {
  addVariant: (name: string, callback: any) => void;
  e: (name: string) => string;
}

const perVariant = ({ addVariant, e }: VariantOptions): void => {
  addVariant(
    "per",
    ({
      container,
      separator,
    }: {
      container: postcss.Container,
      separator: string,
    }) => {
      container.walkRules((rule: postcss.Rule) => {
        rule.walkDecls((decl: postcss.Declaration) => {
          const match = decl.value.match(
            /(\d+(?:\.\d+)?)(?:px|rem|em)?\/(\d+(?:\.\d+)?)(?:px|rem|em)?/
          )
          if (match) {
            const [_, numerator, denominator] = match
            const percentage =
              (parseFloat(numerator) / parseFloat(denominator)) * 100
            if (decl.prop === "color") decl.prop = "font-size"
            decl.value = `${percentage.toFixed(8)}%`
          } else {
            console.log(`No match found for ${decl.prop}: ${decl.value}`)
          }
        })
      })
    }
  )
}

export default perVariant
