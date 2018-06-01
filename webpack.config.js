const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry : './src/index.js',
  output : {
    path : path.join(__dirname, './dist/'),
    filename : 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    compress: true,
    openPage: './dist/index.html',
    port: 8090
  },
  plugins: [htmlPlugin]
};