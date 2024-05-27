const path = require("path");
const autoprefixer = require("autoprefixer");
const CopyPlugin = require("copy-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { getPublishedComponents } = require("./webpack/published-components");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const ANALYZE_BUNDLE = false;

module.exports = () => {
  const IS_DEV = process.env.NODE_ENV === "development";
  const styleLoaders = [
    IS_DEV
      ? {
          loader: "style-loader",
          options: {
            injectType: "singletonStyleTag",
            insert: function insertAtTop(element) {
              const parent = document.querySelector("head");
              // eslint-disable-next-line no-underscore-dangle
              const lastInsertedElement = window._lastElementInsertedByStyleLoader;

              if (!lastInsertedElement) {
                parent.insertBefore(element, parent.firstChild);
              }

              // eslint-disable-next-line no-underscore-dangle
              window._lastElementInsertedByStyleLoader = true;
            }
          }
        }
      : {
          loader: MiniCssExtractPlugin.loader
        },
    {
      loader: "css-loader",
      options: {
        modules: {
          mode: "local",
          auto: true,
          localIdentName: "[path][name]__[local]--[hash:base64:5]",
          localIdentContext: path.resolve(__dirname, "src"),
          exportGlobals: false
        }
      }
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [[autoprefixer()]]
        }
      }
    }
  ];
  const devtool = IS_DEV ? "source-map" : false;
  const publishedComponents = getPublishedComponents();

  const entry = {
    main: [path.join(__dirname, "/src/style-imports"), path.join(__dirname, "/src/index.js")],
    interactionTests: path.join(__dirname, "/src/tests/interactions-utils"),
    testIds: path.join(__dirname, "/src/tests/test-ids-utils"),
    ...publishedComponents
  };

  return {
    devtool,
    resolve: {
      modules: [__dirname, "node_modules"],
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader",
              options: {
                configFile: "tsconfig.cjs.json",
                onlyCompileBundledFiles: true
              }
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules\/(?!monday-ui-style)(.*)/,
          use: ["babel-loader"]
        },
        {
          test: /\.scss$/,
          exclude: /\/storybook\//,
          use: [
            ...styleLoaders,
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  includePaths: [path.resolve("./src")]
                }
              }
            }
          ]
        },
        {
          test: /\.css$/,
          include: [path.resolve(__dirname, "../../node_modules/"), path.resolve(__dirname, "../style")], // only include 3rd party libraries and the style package
          use: styleLoaders
        }
      ]
    },
    externals: {
      react: "react",
      "react-dom": "react-dom"
    },
    entry,
    output: {
      path: path.join(__dirname, "/dist/"),
      filename: "[name].js",
      library: "monday-style",
      libraryTarget: "umd",
      globalObject: "this"
    },
    optimization: {
      minimizer: [new TerserJSPlugin({})]
    },
    plugins: [
      ANALYZE_BUNDLE ? new BundleAnalyzerPlugin() : undefined,
      new CopyPlugin({
        patterns: [
          {
            from: "src/constants/colors.json",
            to: "assets/"
          },
          {
            from: "../../node_modules/monday-ui-style/dist/index.min.css",
            to: "tokens/tokens.css"
          }
        ]
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: "[name].css",
        chunkFilename: "[name].css",
        ignoreOrder: false // Enable to remove warnings about conflicting order
      })
    ].filter(Boolean)
  };
};
