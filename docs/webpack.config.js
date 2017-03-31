var path = require('path');

module.exports = {
  devServer: {
    publicPath: '/build/',
    compress: true,
    port: 9000
  },
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          { loader: "style-loader" }, 
          { loader: "css-loader" }, 
          { loader: "sass-loader" }
        ]
      }
    ]
  }
};
