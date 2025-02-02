const path = require('path');
const webpack = require('webpack')// webpack needs to be explicitly required

module.exports = {
    mode: 'production', //开发模式development 下打包的bundle不压缩 ,生产环境下打包改为： production
    // 要打程序的入口文件
    entry: './node_components.tpl.js',
    // 输出配置
    output: {
        filename: 'node_components.js', //输出文件名
        path: path.resolve(__dirname) //输出文件夹
    },
    plugins: [
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
      ]
}