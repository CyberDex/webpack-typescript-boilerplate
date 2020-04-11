
const webpackConfig = require('webpack-typescript-boilerplate')

module.exports = webpackConfig({
    entryPoints: {
        main: "src/main.ts"
    },
    output: 'dist',
    port: 8000,
    sourceFolder: "src",
    assetsFolder: "assets",
    HTMLTemplate: "assets/index.html",
    templateParameters: {
        "title": "Webpack typescript boilerplate"
    }
})