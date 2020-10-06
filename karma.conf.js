// Karma configuration
// Generated on Sun Mar 01 2020 16:25:05 GMT+0200 (IST)
const path = require("path");
const autoprefixer = require("autoprefixer");
const jsonToSass = require("jsontosass");


const styleLoaders = [
  {
    loader: "style-loader",
    options: {
      injectType: "singletonStyleTag"
    }
  },
  "css-loader",
  {
    loader: "postcss-loader",
    options: {
      plugins: () => [
        autoprefixer() /* Using browsers from .browserslistrc file */
      ]
    }
  }
];

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha", "sinon"],

    // list of files / patterns to load in the browser
    files: ["./src/**/**/*-test.js"],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "./src/**/**/*-test.js": ["webpack", "sourcemap"]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ "mocha"],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Chrome"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    webpack: {
      module: {
        exprContextCritical: false,
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.scss$/,
            use: [
              ...styleLoaders,
              {
                loader: "fast-sass-loader",
                options: {
                  includePaths: [path.resolve("./src")],
                  transformers: [
                    {
                      extensions: [".json"],
                      transform: function(rawFile) {
                        return jsonToSass.convert(rawFile);
                      }
                    }
                  ]
                }
              }
            ]
          },
          {
            test: /\.css$/,
            use: styleLoaders
          }
        ]
      },
      node: {
        fs: "empty"
      },
      devtool: "cheap-module-source-map",
      mode: "development",
      resolve: {
        extensions: [".js", ".jsx"]
      }
    }
  });
};
