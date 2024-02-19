module.exports = {
    entry: {
      admin: './assets/src/js/admin/admin.js',
    },
    output: {
      filename: '[name].js',
      path: __dirname + '/assets/js',
    },
    externals: {
        jquery: 'jQuery',
      },    
  };