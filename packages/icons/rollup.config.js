import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import path from "path";

const ROOT_PATH = path.join(__dirname);
const SRC_PATH = path.join(ROOT_PATH, "src");
const DIST_PATH = path.join(ROOT_PATH, "dist");

export default {
  input: path.join(SRC_PATH, "index.ts"),
  output: {
    dir: DIST_PATH,
    indent: false,
    strict: false,
    exports: "named",
    preserveModules: true,
    preserveModulesRoot: ".",
    format: "esm"
  },
  external: [/node_modules/],
  plugins: [resolve(), commonjs(), typescript(), terser()]
};
