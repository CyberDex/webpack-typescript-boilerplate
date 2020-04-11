# Webpack typescript config

## Instalation
```
npm i https://github.com/CyberDex/WPConf.git -D
```

### 2. Create `build.json` file in the root of the project with this config:
```
{
    "entryPoint": {
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
- `entryPoints` - array of ts files entry points for webpack
- `sourceFolder` - folder for `awesome-typescript-loader` to include
- `assetsFolder` - folder with all additional files (pictures, sounds, configs etc) witch should be included to releese build
- `indexHTML` - index.html template file
- `templateParameters` - variables that you will use inside html file like this: `<title><%= title %></title>`

### 3. Put folowing scripts to `scripts` block of your package.json
```
"dev": "webpack-dev-server --config node_modules/wp-conf/webpack.dev.js",
"build": "webpack --config node_modules/wp-conf/webpack.prod.js"
```

## Usage

#### Local server (https://localhost:8080)
```
npm start
```

#### Production build
```
npm run build
```
