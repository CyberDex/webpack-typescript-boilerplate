const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const JavaScriptObfuscator = require('webpack-obfuscator')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ZipPlugin = require('zip-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = config => {

    const plugins = [
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
            from: config.assetsFolder,
            ignore: [config.HTMLTemplate]
        }]),
        new HTMLWebpackPlugin({
            template: config.HTMLTemplate,
            templateParameters: config.templateParameters,
            minify: {
                collapseWhitespace: true,
                preserveLineBreaks: true,
                minifyJS: true
            }
        })
    ]

    if (config.analyze) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    if (config.zipProdBuild) {
        plugins.push(
            new ZipPlugin({
                filename: 'dist/dist.zip',
                fileOptions: {
                    mtime: new Date(),
                    mode: 0o100664,
                    compress: true,
                    forceZip64Format: false,
                },
                zipOptions: {
                    forceZip64Format: false,
                },
            })
        )
    }

    return {
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
        plugins
    }
}