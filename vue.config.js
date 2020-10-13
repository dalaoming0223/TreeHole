
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = 'TreeHole client' // page title

module.exports = {
  devServer: {
    // mock server
    proxy: 'http://localhost:8081'
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
