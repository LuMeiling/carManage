var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const PAGE_TITLE = '汽车云管理';

module.exports= {
  entry: {
    app: path.resolve(APP_PATH, 'app.jsx'),
    index: path.resolve(APP_PATH, 'index.jsx'),
  },
  output: {
    path: BUILD_PATH,
    filename: 'js/[name]-[chunkhash:8].js'
  },

  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: APP_PATH
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: APP_PATH
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: APP_PATH
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template:'template.html',
      filename:'index-[hash:8].html',
      inject:'false',
      title:PAGE_TITLE,
      date:new Date(),
      chunks:['app'],
      minify:{
        removeComments:true,
        collapseWhiteSpace:true
      }
    }),
    new HtmlwebpackPlugin({
      template:'template.html',
      filename:'login-[hash:8].html',
      inject:'false',
      title:PAGE_TITLE,
      date:new Date(),
      chunks:['app','index'],
      minify:{
        removeComments:true,
        collapseWhiteSpace:true
      }
    })
  ]
}
