
const webpackConfig = require('webpack-typescript-boilerplate')

module.exports = webpackConfig({
    entryPoints: {
        main: "src/main.ts"
    },
    sourceFolder: "src",
    assetsFolder: "assets",
    HTMLTemplate: "assets/index.html",
    templateParameters: {
        "title": "Webpack typescript boilerplate"
    }
})