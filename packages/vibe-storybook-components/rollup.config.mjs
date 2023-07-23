import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import svgr from "@svgr/rollup";
import { terser } from "rollup-plugin-terser";
import typescriptEngine from "typescript";
import pkg from "./package.json" assert { type: "json" };

const EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];

const config = {
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: false
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: false
    }
  ],
  plugins: [
    postcss({
      plugins: [],
      minimize: true
    }),
    external({
      includeDependencies: true
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      typescript: typescriptEngine,
      include: ["*.js+(|x)", "**/*.js+(|x)", "*.ts+(|x)", "**/*.ts+(|x)"],
      exclude: [
        "coverage",
        ".storybook",
        "storybook-static",
        "config",
        "dist",
        "node_modules/**",
        "*.cjs",
        "*.mjs",
        "**/__snapshots__/*",
        "**/__tests__",
        "**/*.test.js+(|x)",
        "**/*.test.ts+(|x)",
        "**/*.mdx",
        "**/*.story.jsx",
        "**/*.story.tsx",
        "**/*.stories.ts+(|x)"
      ]
    }),
    babel({
      extensions: EXTENSIONS,
      babelHelpers: "bundled",
      exclude: "**/node_modules/**"
    }),
    svgr(),
    nodeResolve({
      extensions: [...EXTENSIONS, ".json", ".css"]
    }),
    commonjs(),
    terser()
  ],
  watch: {
    clearScreen: false
  }
};

export default config;
