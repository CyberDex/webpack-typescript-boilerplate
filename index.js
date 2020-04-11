if (!(process.env.NODE_ENV in { production: 0, development: 0 })) {
    throw new Error('Please set NODE_ENV environment variable to "production" or "development"')
}

module.exports = config => {
    if (typeof config.entryPoints !== 'object') {
        throw new Error('Config option "entry" must be an object')
    }

    const path = require('path')
    projectPath = path.dirname(module.parent.filename)
    const fixPath = relPath => path.resolve( projectPath, relPath )
    for(const point in config.entryPoints) {
        config.entryPoints[point] = fixPath( config.entryPoints[point] )
    }
    config.sourceFolder = fixPath( config.sourceFolder )
    config.assetsFolder = fixPath( config.assetsFolder )
    config.HTMLTemplate = fixPath( config.HTMLTemplate )

    const DEV = process.env.NODE_ENV === 'development'
    const commonConfig = require('./webpack.common')
    const optionalConfig = DEV
        ? require('./webpack.dev')
        : require('./webpack.prod')

    const merge = require('webpack-merge')
    return merge(commonConfig(config), optionalConfig(config))
}