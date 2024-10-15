import postcss from "postcss";
import { calculateFluidValue } from "../../lib/utils";
import { SCREEN_SIZE_BY_BREAKPOINT } from "../../config/constants";

interface VariantOptions {
  addVariant: (name: string, callback: any) => void;
  e: (name: string) => string;
}

interface FluidityOptions {
  minSize: number;
  maxSize: number;
  minWidth?: number;
  maxWidth?: number;
}

const typeFluidityVariant = ({ addVariant, e }: VariantOptions): void => {
  addVariant("fluid", ({ container, separator }: { container: postcss.Container; separator: string }) => {
    container.walkRules((rule: postcss.Rule) => {
      rule.walkDecls((decl: postcss.Declaration) => {
        const match = decl.value.match(
          /(\d+(?:\.\d+)?)(?:px|rem|em)?(?:\s+([a-z]+))?\/(\d+(?:\.\d+)?)(?:px|rem|em)?(?:\s+([a-z]+))?/
        );

        if (match) {
          const [_, numerator, numeratorBp, denominator, denominatorBp] = match;
          const options: FluidityOptions = {
            minSize: parseFloat(numerator),
            maxSize: parseFloat(denominator)
          };
          if (numeratorBp) {
            options.minWidth = SCREEN_SIZE_BY_BREAKPOINT[numeratorBp as keyof typeof SCREEN_SIZE_BY_BREAKPOINT];
          }
          if (denominatorBp) {
            options.maxWidth = SCREEN_SIZE_BY_BREAKPOINT[denominatorBp as keyof typeof SCREEN_SIZE_BY_BREAKPOINT];
          }
          const fluidValue = calculateFluidValue(options);
          if (decl.prop === "color") decl.prop = "font-size";
          decl.value = fluidValue;
        } else {
          console.log(`No match found for ${decl.prop}: ${decl.value}`);
        }
      });
    });
  });
};

export default typeFluidityVariant;