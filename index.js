if (!(process.env.NODE_ENV in { production: 0, development: 0 })) {
    throw new Error('Please set NODE_ENV environment variable to "production" or "development"')
}
const merge = require('webpack-merge')

const path = require('path')
projectPath = path.dirname(module.parent.filename)
const fixPath = relPath => path.resolve( projectPath, relPath )

const DEV = process.env.NODE_ENV === 'development'

module.exports = config => {
    if (typeof entry !== 'object') {
        throw new Error('Config option "entry" must be an object')
    }

    for(const point in config.entryPoints) {
        build.entryPoints[point] = fixPath( config.entryPoints[point] )
    }
    config.sourceFolder = fixPath( config.sourceFolder )
    config.assetsFolder = fixPath( config.assetsFolder )
    config.HTMLTemplate = fixPath( config.HTMLTemplate )

    const commonConfig = require('./webpack.common')
    const optionalConfig = DEV
        ? require('./webpack.dev')
        : require('./webpack.prod')

    return merge(commonConfig, optionalConfig)
}