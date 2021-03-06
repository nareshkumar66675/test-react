const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './dist/index.html',
});

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    compress: true,
    openPage: './dist/index.html',
    port: 8090,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [htmlPlugin],
};
