# Webpack typescript config

## Instalation

### 1. Add it as submodule:
```
git submodule add https://github.com/CyberDex/webpack
```
or just drop the files to `webpack` forder of your project.

### 2. Copy `build.json` to the root of the project and set it's parameters:
- `entryPoint` - array of ts files entry points for webpack
- `sourceFolder` - your sourse folder, where entryPoint filea are places
- `assetsFolder` - folder with all additional files for the application
- `indexHTML` - index.html template file (it should have css link already)

### 3. Put folowing scripts to `scripts` block of your package.json
```
		"start": "npm run dev",
		"dev": "webpack-dev-server --config webpack/webpack.dev.js",
		"build": "webpack --config webpack/webpack.prod.js"

```
Or just copy `package.json` to the root if you don't have it.

## Usage

### Install dependencies
```
npm i
```

#### Local build
```
npm start
```
Run on https://localhost:8080

#### Production build
```
npm run build
```
