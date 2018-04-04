//webpack.config.js
 module.exports = {
    entry:'./src/entry.js',// 入口文件
    output : { //输出文件
            filename : 'index.js',//输出文件名
            path:_dirname + '/out'//输出文件路径
    },
 }