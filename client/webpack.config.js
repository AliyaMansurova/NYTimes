const webpack = require('webpack');
const publicPath = '/assets/';
const path = require('path');
const sourceRoot = './src';

module.exports = {
  context: __dirname + "/src",

  entry: {
    javascript: "./index.js",
    html: "./index.html",
  },
  output: {
    path: path.resolve(__dirname, './dist/assets'),
    filename: "[name].bundle.js",
    publicPath
  },
  devServer: {
    contentBase: path.resolve(__dirname, sourceRoot),
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader"]
      },
      {
        test: /\.json?$/,
        loaders: ["json-loader"]
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
          options: {
            sourceMap: true
          }
        },{
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },{
          loader: 'less-loader',
          options: {
            sourceMap: true
          }
        }]
      },{
        test: /\.(ttf|otf|eot|woff(2)?)$/,
        use: ['file-loader?name=fonts/[name].[ext]']
      },{
        test: /\.(png|jpe?g|gif|svg)$/,
        use: ['file-loader?name=[path][name].[ext]']
      }
    ]
  }

};