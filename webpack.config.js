const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    button: './assets/src/scss/button.scss',
    flipcard: './assets/src/scss/flipcard.scss',
    team: './assets/src/scss/team.scss',
    post_tab: './assets/src/scss/post_tab.scss',
    category_list: './assets/src/scss/category_list.scss',
    icon: './assets/src/scss/icon.scss',
    social_icon: './assets/src/scss/social_icon.scss',
    counter: './assets/src/scss/counter.scss',
    card: './assets/src/scss/card.scss',
    style: './assets/src/scss/style.scss',
    pricingtable: './assets/src/scss/pricingtable.scss',
    accordion: './assets/src/scss/accordion.scss',
    // iconbox: './assets/css/iconbox.scss',
    // slider_css: './assets/css/slider.scss',
    button: './assets/src/js/button.js',
    post_tab: './assets/src/js/post_tab.js',
    pricingtable: './assets/src/js/pricingtable.js',
    image_accordion: './assets/src/scss/image_accordion.scss',
    tab: './assets/src/scss/tab.scss',
    feature_list: './assets/src/scss/feature_list.scss',
    // iconbox: './assets/css/iconbox.scss',
    // slider_css: './assets/css/slider.scss',
    // button: './assets/src/js/button.js',
    image_accordion: './assets/src/js/image_accordion.js',
    counter: './assets/src/js/counter.js',
    accordion: './assets/src/js/accordion.js',
    card: './assets/src/js/card.js',
    tab: './assets/src/js/tab.js',
    main: './assets/src/js/index.js',
    // admin part 
    admin: './assets/src/admin/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'assets/dist'),
    filename: '[name].js', // For JS outputs
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
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css', // For CSS outputs
    }),
  ],
  externals: {
    jquery: 'jQuery'
  }
};