import * as path from "path";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import postCssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import { sha256 } from "js-sha256";
import * as fs from "fs";
import ejs from "ejs";

const EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];
const ROOT_PATH = path.join(__dirname);
const SRC_PATH = path.join(ROOT_PATH, "src");
const DIST_PATH = path.join(ROOT_PATH, "dist");
const injectStyle = fs.readFileSync("./rollup/styleInject.ejs", "utf8");

const shouldMockModularClassnames = process.env.mock_classnames === "on";

function replaceDotWithUnderscore(verNum) {
  return verNum.replace(/\./g, "_");
}

function getShortSha(content, length = 10) {
  return sha256(content).slice(0, length);
}

function loadPackageJson() {
  const packageJson = fs.readFileSync("./package.json", "utf8");
  return JSON.parse(packageJson);
}

function generateCssModulesScopedName(name, filename, css) {
  const start = css.indexOf(`${name} {`);
  const end = css.indexOf("}", start);
  const content = css.slice(start + name.length + 1, end).replace(/[\r\n]/, "");
  const loadPackageJsonResult = loadPackageJson();
  return `${name}_${getShortSha(content + replaceDotWithUnderscore(loadPackageJsonResult.version))}`;
}

function generateCssModulesMockName(name) {
  return name;
}

function handleNextEntry() {
  return {
    name: "handle-next-entry",
    writeBundle() {
      const nextFolder = path.join(DIST_PATH, "esm", "next");

      // Ensure the 'next' directory exists.
      if (!fs.existsSync(nextFolder)) {
        fs.mkdirSync(nextFolder);
      }

      // Paths
      const originalJsPath = path.join(DIST_PATH, "esm", "src", "next.js");
      const originalDtsPath = path.join(DIST_PATH, "esm", "next.d.ts");
      const targetJsPath = path.join(nextFolder, "next.js");
      const targetDtsPath = path.join(nextFolder, "next.d.ts");

      // Move JS and DTS files
      if (fs.existsSync(originalJsPath)) {
        fs.renameSync(originalJsPath, targetJsPath);
      }
      if (fs.existsSync(originalDtsPath)) {
        fs.renameSync(originalDtsPath, targetDtsPath);
      }

      // Create package.json in the 'next' folder
      const packageData = {
        name: "next",
        private: true,
        main: "next.js",
        types: "next.d.ts"
      };
      fs.writeFileSync(path.join(nextFolder, "package.json"), JSON.stringify(packageData, null, 2));
    }
  };
}

export default {
  output: {
    dir: shouldMockModularClassnames ? path.join(DIST_PATH, "mocked_classnames_esm") : path.join(DIST_PATH, "esm"),
    indent: false,
    strict: false,
    exports: "named",
    preserveModules: true
  },
  input: {
    index: path.join(SRC_PATH, "index.js"),
    icons: path.join(SRC_PATH, "components/Icon/Icons/index.ts"),
    interactionsTests: path.join(SRC_PATH, "tests/interactions-utils.ts"),
    testIds: path.join(SRC_PATH, "tests/test-ids-utils.ts"),
    next: path.join(SRC_PATH, "next.ts")
  },
  external: [/node_modules\/(?!monday-ui-style)(.*)/],
  plugins: [
    commonjs(),
    handleNextEntry(),
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
          shouldMockModularClassnames
            ? generateCssModulesMockName(name)
            : generateCssModulesScopedName(name, filename, css)
      }
    })
  ]
};
