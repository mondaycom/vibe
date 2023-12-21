/**
 * Config for @storybook/addon-styling-webpack
 */
export const storybookAddonStylingWebpackOptions = {
  rules: [
    {
      test: /\.css$/,
      sideEffects: true,
      use: [
        require.resolve("style-loader"),
        {
          loader: require.resolve("css-loader"),
          options: {
            // Want to add more CSS Modules options? Read more here: https://github.com/webpack-contrib/css-loader#modules
            modules: {
              auto: true,
              localIdentName: "[name]_[local]"
            }
          }
        }
      ]
    },
    {
      test: /\.s[ac]ss$/,
      sideEffects: true,
      use: [
        require.resolve("style-loader"),
        {
          loader: require.resolve("css-loader"),
          options: {
            // Want to add more CSS Modules options? Read more here: https://github.com/webpack-contrib/css-loader#modules
            modules: {
              auto: true,
              localIdentName: "[name]_[local]"
            },
            importLoaders: 2
          }
        },
        require.resolve("resolve-url-loader"),
        {
          loader: require.resolve("sass-loader"),
          options: {
            // Want to add more Sass options? Read more here: https://webpack.js.org/loaders/sass-loader/#options
            implementation: require.resolve("sass"),
            sourceMap: true,
            sassOptions: {}
          }
        }
      ]
    }
  ]
};
