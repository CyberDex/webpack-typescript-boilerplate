const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const JavaScriptObfuscator = require('webpack-obfuscator')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const { projectWay } = require('./helper')
const common = require('./webpack.common.js')
const build = require(projectWay('build.json'))

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'js/[name].[contenthash].bundle.js',
        chunkFilename: 'js/[name].[contenthash].chunk.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    filename: '[name].[contenthash].bundle.js'
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new JavaScriptObfuscator(
            {
                rotateStringArray: true,
                stringArray: true,
                stringArrayThreshold: 0.75
            },
            ['vendors.*.js']
        ),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
        new CopyWebpackPlugin([{
            from: projectWay( build.assetsFolder ),
            ignore: [projectWay( build.indexHTML )]
        }]),
        new HTMLWebpackPlugin({
            template: projectWay( build.indexHTML ),
            templateParameters: build.templateParameters,
            minify: {
                collapseWhitespace: true
            }
        })
    ]
})