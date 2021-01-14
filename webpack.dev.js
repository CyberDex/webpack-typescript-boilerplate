import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'

module.exports = config => ({
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: config.assetsFolder,
        quiet: true,
        clientLogLevel: 'silent',
        host: '0.0.0.0',
        overlay: true,
        compress: true,
        watchContentBase: true,
        https: config.https || false,
        port: config.port || 8080
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: config.HTMLTemplate,
            templateParameters: config.templateParameters
        })
    ]
});
