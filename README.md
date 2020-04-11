# Webpack typescript config 
> [![npm version](https://badge.fury.io/js/webpack-typescript-boilerplate.svg)](https://badge.fury.io/js/webpack-typescript-boilerplate)

## 1. Install the module:
```
npm i webpack-typescript-boilerplate -D
```

## 2. Create `build.json` file in the root of the project with this config:
```
{
    "entryPoints": {
        "main": "src/main.ts"
    },
    "sourceFolder": "src",
    "assetsFolder": "assets",
    "indexHTML": "assets/index.html",
    "templateParameters": {
        "title": "Webpack"
    }
}
```
### Description:
- `entryPoints` - array of ts files entry points for webpack
- `sourceFolder` - folder for `awesome-typescript-loader` to include
- `assetsFolder` - folder with all additional files (pictures, sounds, configs etc) witch should be included to releese build
- `indexHTML` - index.html template file
- `templateParameters` - variables that you will use inside html file like this: `<title><%= title %></title>`

## 3. Put folowing scripts to your package.json
```
"dev": "webpack-dev-server --config node_modules/webpack-config/webpack.dev.js",
"build": "webpack --config node_modules/webpack-config/webpack.prod.js"
```

## 4. Use it:

#### Local server (https://localhost:8080)
```
npm run dev
```

#### Production build
```
npm run build
```
