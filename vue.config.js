const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/felted_creatures/':'/',
  lintOnSave: false,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'FELTED CREATURES'
    }
  }
})
