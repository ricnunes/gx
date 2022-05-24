const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/scss/settings.scss";'
      }
    }
  },

  publicPath: process.env.NODE_ENV === "production" ? "/gx/" : "/",

  assetsDir: 'assets'
})
