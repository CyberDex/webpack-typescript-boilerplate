const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')
const { projectWay } = require('./helper')
const build = require(projectWay('build.json'))

for(point in build.entryPoints) {
    build.entryPoints[point] = projectWay( build.entryPoints[point] )
}

module.exports = {
    entry: build.entryPoints,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            include: projectWay( build.sourceFolder ),
            options: {
                transpileOnly: true,
                happyPackMode: true
            }
        }]
    },
    plugins: [
        new HardSourceWebpackPlugin(),
        new CheckerPlugin(),
        new ForkTsCheckerWebpackPlugin({
            silent: true,
            checkSyntacticErrors: true
        })
    ]
}