# Webpack typescript config

## Instalation
1. Add it as submodule:
```
git submodule add https://github.com/CyberDex/webpack
```
2. Copy `build.json` to the root of the project and set your parameters:
(entryPoint, sourceFolder, assetsFolder, indexHTML)

3. Copy `devDependencies` and `scripts` from `webpack/package.json` to your root package.json.
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
