/* eslint-disable import/no-extraneous-dependencies */

import * as path from "path";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

const EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: ["src/index.js"],
  output: {
    dir: path.join(__dirname, "dist"),
    format: "es",
    indent: false,
    strict: false,
    exports: "named"
  },
  external: [/node_modules/],
  preserveModules: true,
  plugins: [
    commonjs(),
    nodeResolve({
      extensions: [...EXTENSIONS, ".json"]
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      allowJs: true
    }),
    babel({
      babelHelpers: "bundled",
      extensions: EXTENSIONS
    }),
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true
      }
    }),
    postcss({
      /**
       * Normally, this plugin expects a local version of "node_modules" to be present, but since
       * we're externalizing all "node_modules", it doesn't exist.
       * This little hack makes sure we're using "node_modules" instead of what the plugin expects.
       */
      inject(cssVariableName) {
        return `import styleInject from 'style-inject';\nstyleInject(${cssVariableName});`;
      },
      plugins: [],
      autoModules: true
    })
  ]
};
