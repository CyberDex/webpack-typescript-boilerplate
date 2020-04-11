# Webpack typescript config 
[![npm version](https://badge.fury.io/js/webpack-typescript-boilerplate.svg)](https://badge.fury.io/js/webpack-typescript-boilerplate)

## 1. Install the module:
```
npm i webpack-typescript-boilerplate -D
```

## 2. Copy config file from module:
```
cp node_modules/webpack-typescript-boilerplate/setup/webpack.config.js ./
```

## 3. Change config inside copied file according to these values:
- `entryPoints` - an array of ts files to bundle separately
- `output` - build directory
- `port` - webpack-dev-server port number
- `sourceFolder` - folder for `awesome-typescript-loader` to include
- `assetsFolder` - folder with all additional files (pictures, sounds, configs etc) witch should be included to releese build
- `HTMLTemplate` - main app index.html file template
- `templateParameters` - variables that you will use inside html file like this: `<title><%= title %></title>`

## 4. Put folowing values to `scripts` block of your package.json
```
"dev": "cross-env NODE_ENV=development webpack-dev-server",
"build": "cross-env NODE_ENV=production webpack"
```

## 5. Use it:

#### Local server (https://localhost:8080)
```
npm run dev
```

#### Production build
```
npm run build
```
