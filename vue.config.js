const CompressionWebpackPlugin = require('compression-webpack-plugin')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? "./" : "/",
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        filename: "[path][base].gz",
        algorithm: "gzip",
        test: new RegExp("\\.(js|css)$"),
        threshold: 10240,
        deleteOriginalAssets: false
      })
    ],
    devtool: process.env.NODE_ENV === 'dev' ? 'source-map' : undefined
  },
}