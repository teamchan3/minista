import perVariant from "./variants/perVariant";
import vwVariant from "./variants/vwVariant";
import vwsVariant from "./variants/vwsVariant";
import remVariant from "./variants/remVariant";
import fluidityVariant from "./variants/fluidityVariant";

// Tailwind プラグイン関数の型定義
type PluginFunction = ({ addVariant, e }: {
  addVariant: (name: string, definition: string | string[] | ((param: { container: any, separator: string, modifySelectors: (param: any) => any }) => void)) => void;
  e: (className: string) => string;
}) => void;

// バリアントプラグインの配列
const variants: PluginFunction[] = [
  perVariant,
  vwVariant,
  vwsVariant,
  remVariant,
  fluidityVariant
];

export default variants;