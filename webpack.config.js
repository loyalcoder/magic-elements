const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    button: './assets/src/scss/button.scss',
    chart: './assets/src/scss/chart.scss',
    flipcard: './assets/src/scss/flipcard.scss',
    team: './assets/src/scss/team.scss',
    style: './assets/src/scss/style.scss',
    // iconbox: './assets/css/iconbox.scss',
    // slider_css: './assets/css/slider.scss',
    button: './assets/src/js/button.js',
    chart: './assets/src/js/chart.js',
    main: './assets/src/js/index.js',
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