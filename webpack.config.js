const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Common base config
const baseConfig = {
  // 1) Combine each SCSS + JS into a single entry array
  entry: {
    // 1) Combined entries (SCSS + JS together):
    button: [
      './assets/src/scss/button.scss',
      './assets/src/js/button.js',
    ],
    post_tab: [
      './assets/src/scss/post_tab.scss',
      './assets/src/js/post_tab.js',
    ],
    counter: [
      './assets/src/scss/counter.scss',
      './assets/src/js/counter.js',
    ],
    card: [
      './assets/src/scss/card.scss',
      './assets/src/js/card.js',
    ],
    pricingtable: [
      './assets/src/scss/pricingtable.scss',
      './assets/src/js/pricingtable.js',
    ],
    accordion: [
      './assets/src/scss/accordion.scss',
      './assets/src/js/accordion.js',
    ],
    image_accordion: [
      './assets/src/scss/image_accordion.scss',
      './assets/src/js/image_accordion.js',
    ],
    tab: [
      './assets/src/scss/tab.scss',
      './assets/src/js/tab.js',
    ],

    // 2) SCSS ONLY (no JS file mentioned):
    flipcard: './assets/src/scss/flipcard.scss',
    category_list: './assets/src/scss/category_list.scss',
    feature_list: './assets/src/scss/feature_list.scss',

    // 3) JS ONLY (if there's no SCSS for 'main', or your 'admin' is JS only, etc.):
    main: './assets/src/js/index.js',
    admin: './assets/src/admin/index.js',
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
