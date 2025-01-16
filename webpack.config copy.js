const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Common base config
const baseConfig = {
  // 1) Combine each SCSS + JS into a single entry array
  entry: {
    button: [
      './assets/src/scss/button.scss',
      './assets/src/js/button.js',
    ],
    tab: [
      './assets/src/scss/tab.scss',
      './assets/src/js/tab.js',
    ],
    // repeat for flipcard, accordion, etc.
  },
  externals: {
    jquery: 'jQuery',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};

// Unminified config
const devConfig = {
  ...baseConfig,
  name: 'dev',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'assets/dist'),
    filename: '[name].js', // => tab.js, button.js, etc.
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css', // => tab.css, button.css, etc.
    }),
  ],
};

// Minified config
const prodConfig = {
  ...baseConfig,
  name: 'prod',
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'assets/dist'),
    filename: '[name].min.js', // => tab.min.js, button.min.js
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css', // => tab.min.css, button.min.css
    }),
  ],
};

module.exports = [devConfig, prodConfig];
