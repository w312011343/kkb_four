const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
 module.exports = [new HtmlWebpackPlugin({
      filename: 'user.index.html',
      template: path.join(__dirname,'../src/projects/user/index.html'),
      inject: true,
                  // 入口实际就是entry的key
      chunks:['manifest','vendor','user'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
     new HtmlWebpackPlugin({
      filename: 'goods.index.html',
      template: path.join(__dirname,'../src/projects/goods/index.html'),
      inject: true,
                  // 入口实际就是entry的key
      chunks:['manifest','vendor','goods'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    })]