import { fileURLToPath } from "url";
import path from "path";
import * as fs from "fs";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import postCssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import { sha256 } from "js-sha256";
import ejs from "ejs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_NM = path.resolve(__dirname, "../../../node_modules");
const CONFIG_DIR = path.join(ROOT_NM, "@vibe/config");
const EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];
const ROOT_PATH = process.cwd();
const SRC_PATH = path.join(ROOT_PATH, "src");
const DIST_PATH = path.join(ROOT_PATH, "dist");
const injectStyle = fs.readFileSync(path.join(CONFIG_DIR, "./scripts/styleInject.ejs"), "utf8");
const shouldMockModularClassnames = process.env.mock_classnames === "on";

function loadPackageJson() {
  return JSON.parse(fs.readFileSync(path.join(ROOT_PATH, "package.json"), "utf8"));
}

function getShortSha(content, length = 10) {
  return sha256(content).slice(0, length);
}

function replaceDotWithUnderscore(verNum) {
  return verNum.replace(/\./g, "_");
}

function generateCssModulesScopedName(name, filename, css) {
  const start = css.indexOf(`${name} {`);
  const end = css.indexOf("}", start);
  const content = css.slice(start + name.length + 1, end).replace(/[\r\n]/, "");
  const loadPackageJsonResult = loadPackageJson();
  return `${name}_${getShortSha(content + replaceDotWithUnderscore(loadPackageJsonResult.version))}`;
}

function onwarn(message, handler) {
  if (message.code === "THIS_IS_UNDEFINED" || message.code === "SOURCEMAP_ERROR") return;
  if (message.code === "CIRCULAR_DEPENDENCY") {
    console.error("Circular dependency detected: ", message, "Build failed, exiting...");
    process.exit(1);
  }
  handler(message);
}

export default {
  onwarn,
  output: {
    dir: shouldMockModularClassnames ? path.join(DIST_PATH, "mocked_classnames") : DIST_PATH,
    indent: false,
    strict: false,
    exports: "named",
    preserveModules: true,
    preserveModulesRoot: "./src",
    sourcemap: true,
    format: "esm"
  },
  input: path.join(SRC_PATH, "index.ts"),
  external: [
    /node_modules\/(?!@vibe\/style)(.*)/,
    /@vibe\/.*/
  ],
  plugins: [
    commonjs(),
    nodeResolve({
      extensions: [...EXTENSIONS, ".json", ".css"]
    }),
    typescript({
      tsconfigOverride: {
        exclude: ["**/__tests__", "**/__stories__", path.join(SRC_PATH, "storybook")],
        compilerOptions: {
          paths: {
            "@vibe/*": [path.join(ROOT_NM, "@vibe/*")]
          }
        }
      }
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
      inject: function (cssVariableName, filename) {
        if (!injectStyle) return null;
        let shaKey = filename;
        try {
          const data = fs.readFileSync(filename, "utf8");
          shaKey = getShortSha(data, 12);
        } catch (err) {
          console.error(err);
        }
        const version = replaceDotWithUnderscore(loadPackageJson().version);
        const hashValue = `s_id-${shaKey}`;
        return ejs.render(injectStyle, { cssVariableName, hashValue, version });
      },
      plugins: [autoprefixer(), postCssImport()],
      modules: {
        generateScopedName: (name, filename, css) =>
          shouldMockModularClassnames ? name : generateCssModulesScopedName(name, filename, css)
      }
    })
  ]
};
