const path = require("path");
const autoprefixer = require("autoprefixer");
const CopyPlugin = require("copy-webpack-plugin");
const { ESBuildMinifyPlugin } = require("esbuild-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const { getPublishedComponents } = require("./webpack/published-components");

const isDev = process.env.NODE_ENV === "development";

module.exports = (options = {}) => {
  const styleLoaders = [
    isDev || options.storybook
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
          plugins: () => [autoprefixer() /* Using browsers from .browserslistrc file */]
        }
      }
    }
  ];

  return {
    devtool: options.storybook ? "eval-cheap-module-source-map" : false,
    resolve: {
      modules: [__dirname, "node_modules"],
      extensions: [".js", ".jsx"]
    },

    module: {
      rules: [
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
      main: path.join(__dirname, "src/index.js"),
      ...getPublishedComponents()
    },
    output: {
      path: path.join(__dirname, "/dist/"),
      filename: "[name].js",
      library: "monday-style",
      libraryTarget: "umd",
      globalObject: "this"
    },
    optimization: {
      minimizer: [
        new ESBuildMinifyPlugin({
          target: "es2015"
        }),
        new CssMinimizerPlugin()
      ]
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
