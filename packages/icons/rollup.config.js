import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import svg from "rollup-plugin-svg";

export default {
  input: ["src/react/index.ts", "src/lazy/index.ts", "src/svg/index.ts", "src/iconsMetaData.ts"],
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
  plugins: [resolve(), typescript(), terser(), svg()]
};
