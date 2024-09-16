import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: {
    index: "src/index.ts",
    iconsMetaData: "src/iconsMetaData.ts"
  },
  output: {
    dir: "dist",
    indent: false,
    strict: false,
    exports: "named",
    preserveModules: true,
    preserveModulesRoot: "./src",
    format: "esm"
  },
  external: [/node_modules/],
  plugins: [resolve(), typescript(), terser()]
};
