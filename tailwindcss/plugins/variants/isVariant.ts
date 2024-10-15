import plugin from "tailwindcss/plugin";

const isVariant = (name: string) => {
  let selector = `.is-${name}`;
  return plugin(({ addVariant }) => {
    addVariant(`is-${name}`, [`${selector} &`, `&${selector}`]);
  });
};

export default isVariant;