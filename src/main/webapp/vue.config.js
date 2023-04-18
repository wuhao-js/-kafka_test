const path = require('path');
function resolve (dir) {
  //此处使用path.resolve 或path.join 可自行调整
  return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src'))
    },
    devServer: {
        proxy: "http://127.0.0.1:8889", //开发环境的跨域问题解决
        port: 8181
    },
}
