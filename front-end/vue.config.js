module.exports = {
  chainWebpack: config => config.resolve.symlinks(false),
  lintOnSave: process.env.NODE_ENV !== 'production'
}