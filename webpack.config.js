const path = require("path");
const autoprefixer = require("autoprefixer");
const CopyPlugin = require("copy-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { getPublishedComponents } = require("./webpack/published-components");

module.exports = options => {
  const IS_DEV = process.env.NODE_ENV === "development";
  const nodeExternals = require("webpack-node-externals");
  const styleLoaders = [
    IS_DEV || options.storybook
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
  // why false? we are open source anyway
  const devtool = options.storybook ? "eval-cheap-module-source-map" : false;

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
          use: "ts-loader"
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.scss$/,
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
          include: [path.resolve(__dirname, "not_exist_path")],
          use: styleLoaders
        }
      ]
    },
    externals: [nodeExternals()],
    entry: {
      main: path.join(__dirname, "/src/index.js"),
      ...getPublishedComponents(__dirname)
    },
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
      new CopyPlugin({
        patterns: [
          {
            from: "src/constants/colors.json",
            to: "assets/"
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
    ]
  };
};
