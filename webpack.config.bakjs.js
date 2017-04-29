var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
const pageTitle = '汽车云管理';


module.exports = {
  context:__dirname,
  entry: { "index": path.resolve(__dirname, 'src/script/index.js'),
            "login": path.resolve(__dirname, 'src/script/login.js'),
            "app": path.resolve(__dirname, 'src/app.js')},
  output: {
    filename: 'js/[name]-[chunkhash].js',
    path: path.join(__dirname, '/dist')
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        include:path.resolve(__dirname,'src'),
        exclude:path.resolve(__dirname,'node_modules'),
        query:{
          presets:['latest']
        }
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader!postcss-loader',
        use:['style-loader',
        'css-loader',
          {
            loader:'postcss-loader',
            options:{
              plugins:[
                  require('autoprefixer')({
                    browsers:['last 5 versions']
                  })
              ]
            }
          }
        ]
      }

    ]
  },
  postcss:[
    require('autoprefixer')({
      browsers:['last 5 versions']
    })
  ],
  plugins: [
    new htmlWebpackPlugin({
      template:'template.html',
      filename:'index-[hash].html',
      inject:'false',
      title:pageTitle,
      date:new Date(),
      chunks:['app','index'],
      minify:{
        removeComments:true,
        collapseWhiteSpace:true
      }
    }),
    new htmlWebpackPlugin({
      template:'template.html',
      filename:'login-[hash].html',
      inject:'false',
      title:pageTitle,
      date:new Date(),
      chunks:['app','login'],
      minify:{
        removeComments:true,
        collapseWhiteSpace:true
      }
    })
  ]

}
