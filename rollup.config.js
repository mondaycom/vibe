import * as path from "path";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import postCssImport from "postcss-import";
import autoprefixer from "autoprefixer";

const version = require("./package.json").version;

const EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];
const ROOT_PATH = path.join(__dirname);
const SRC_PATH = path.join(ROOT_PATH, "src");
const DIST_PATH = path.join(ROOT_PATH, "dist");

export default {
  output: {
    dir: path.join(DIST_PATH, "esm"),
    indent: false,
    strict: false,
    exports: "named",
    preserveModules: true
  },
  input: {
    index: path.join(SRC_PATH, "index.js"),
    icons: path.join(SRC_PATH, "components/Icon/Icons/index.ts"),
    interactionsTests: path.join(SRC_PATH, "tests/interactions-utils.ts"),
    testIds: path.join(SRC_PATH, "tests/test-ids-utils.ts")
  },
  // external: [/node_modules/],
  external: [/node_modules\/(?!monday-ui-style)(.*)/],
  plugins: [
    commonjs(),
    nodeResolve({
      extensions: [...EXTENSIONS, ".json", ".css"]
    }),
    typescript({
      tsconfig: path.join(ROOT_PATH, "tsconfig.esm.json")
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
      inject: function (cssVariableName) {
        const hashValue = `s_id-${version}-${performance.now()}`.replaceAll(".", "_");
        return `function styleInject(css, { insertAt } = {}) {
    const head = document.head || document.getElementsByTagName('head')[0]
    const id = "${hashValue}";
    const styleExists = head.querySelector("#${hashValue}");
    if(styleExists) return;
    
    const style = document.createElement('style');
    style.id = id;
  
    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild)
      } else {
        head.appendChild(style)
      }
    } else {
      head.appendChild(style)
    }
  
    if (style.styleSheet) {
      style.styleSheet.cssText = css
    } else {
      style.appendChild(document.createTextNode(css))
    }
  }
  
  styleInject(${cssVariableName}, { insertAt: 'top' });
  
  `;
      },
      plugins: [autoprefixer(), postCssImport()],
      autoModules: true
    })
  ]
};
