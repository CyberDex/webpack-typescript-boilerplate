const { CheckerPlugin } = require('awesome-typescript-loader')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = config => ({
    mode: process.env.NODE_ENV,
    entry: config.entryPoints,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [new TsconfigPathsPlugin()]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            include: config.sourceFolder,
            options: {
                transpileOnly: true,
                happyPackMode: true
            }
        }]
    },
    plugins: [
        new CheckerPlugin(),
        new ForkTsCheckerWebpackPlugin({
            silent: true,
            checkSyntacticErrors: true
        })
    ]
})