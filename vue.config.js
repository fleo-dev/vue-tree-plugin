const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
        },
      },
    },
  },
  transpileDependencies: true
})

