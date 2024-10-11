// 使用例:
// .per:w-[100px/200px]

const perVariant = ({ addVariant, e }) => {
  addVariant("per", ({ container, separator }) => {
    container.walkRules((rule) => {
      rule.walkDecls((decl) => {
        const match = decl.value.match(
          /(\d+(?:\.\d+)?)(?:px|rem|em)?\/(\d+(?:\.\d+)?)(?:px|rem|em)?/
        );
        if (match) {
          const [_, numerator, denominator] = match;
          const percentage =
            (parseFloat(numerator) / parseFloat(denominator)) * 100;
          decl.value = `${percentage.toFixed(2)}%`;
        } else {
          console.log(`No match found for ${decl.prop}: ${decl.value}`);
        }
      });
    });
  });
};

export default perVariant;
