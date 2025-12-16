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
import copy from "rollup-plugin-copy";

const EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];
const ROOT_PATH = path.join(__dirname);
const SRC_PATH = path.join(ROOT_PATH, "src");
const DIST_PATH = path.join(ROOT_PATH, "dist");
const injectStyle = fs.readFileSync("./scripts/styleInject.ejs", "utf8");

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

function onwarn(message) {
  if (message.code === "CIRCULAR_DEPENDENCY") {
    console.error("Circular dependency detected: ", message, "Build failed, exiting...");
    process.exit(1);
  }
  console.warn(message);
}

function generateCssModulesMockName(name) {
  return name;
}

function getVibePackagesWithMockedClassNames() {
  const packagesWithMocked = new Map();
  const componentsDir = path.resolve(__dirname, "../components");

  if (fs.existsSync(componentsDir)) {
    const folders = fs
      .readdirSync(componentsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    for (const folderName of folders) {
      const packageJsonPath = path.join(componentsDir, folderName, "package.json");

      if (fs.existsSync(packageJsonPath)) {
        try {
          const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

          if (packageJson.name?.startsWith("@vibe/") && packageJson.exports?.["./mockedClassNames"]) {
            packagesWithMocked.set(packageJson.name, true);
          }
        } catch (e) {
          // Skip invalid package.json files
        }
      }
    }
  }

  return packagesWithMocked;
}

const vibePackagesWithMocked = shouldMockModularClassnames ? getVibePackagesWithMockedClassNames() : new Map();

export default {
  onwarn,
  output: {
    dir: shouldMockModularClassnames ? path.join(DIST_PATH, "mocked_classnames") : DIST_PATH,
    indent: false,
    strict: false,
    exports: "named",
    preserveModules: true,
    preserveModulesRoot: ".",
    sourcemap: true,
    format: "esm"
  },
  input: {
    index: path.join(SRC_PATH, "index.ts"),
    interactionsTests: path.join(SRC_PATH, "tests/interactions-utils.ts"),
    testIds: path.join(SRC_PATH, "tests/test-ids-utils.ts"),
    next: path.join(SRC_PATH, "components/next.ts")
  },
  external: [/node_modules\/(?!monday-ui-style)(.*)/],
  plugins: [
    ...(shouldMockModularClassnames
      ? [
          {
            name: "resolve-vibe-to-mocked-entry-points",
            resolveId: {
              order: "pre",
              handler(source) {
                if (source.startsWith("@vibe/") && !source.includes("/mockedClassNames")) {
                  const packageName = source.replace("@vibe/", "").split("/")[0];
                  const fullPackageName = `@vibe/${packageName}`;

                  if (vibePackagesWithMocked.has(fullPackageName)) {
                    return { id: `${fullPackageName}/mockedClassNames`, external: true };
                  }

                  return { id: source, external: true };
                }
                return null;
              }
            }
          }
        ]
      : []),
    commonjs(),
    nodeResolve({
      extensions: [...EXTENSIONS, ".json", ".css"]
    }),
    typescript({
      tsconfigOverride: {
        exclude: ["**/__tests__", "**/__stories__", path.join(SRC_PATH, "storybook")]
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
    }),
    copy({
      targets: [
        {
          src: "../../node_modules/monday-ui-style/dist/index.min.css",
          dest: "dist/tokens",
          rename: () => "tokens.css"
        },
        {
          src: "types/tokens.d.ts",
          dest: "dist/tokens"
        }
      ]
    })
  ]
};
