const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = config => ({
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: config.assetsFolder,
        quiet: true,
        clientLogLevel: 'silent',
        host: '0.0.0.0',
        overlay: true,
        compress: true,
        watchContentBase: true
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: config.HTMLTemplate,
            templateParameters: config.templateParameters
        })
    ]
});
