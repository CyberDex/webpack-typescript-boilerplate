# Webpack typescript boilerplate</h1></td>

<a href="https://www.npmjs.com/package/webpack-typescript-boilerplate">
    <img alt="NPM Status" src="https://img.shields.io/npm/v/webpack-typescript-boilerplate.svg?style=for-the-badge"><img alt="npm" src="https://img.shields.io/npm/dt/webpack-typescript-boilerplate?style=for-the-badge">
</a>

## 1. Install:

```
npm i webpack-typescript-boilerplate -D
```

## 2. Copy config file from module:

```
cp node_modules/webpack-typescript-boilerplate/setup/webpack.config.js ./
```

## 3. Change config inside copied file according to these values:

-   `entryPoints` - an array of ts files to bundle separately
-   `sourceFolder` - folder for `awesome-typescript-loader` to include
-   `assetsFolder` - folder with all additional files (pictures, sounds, configs etc.) witch should be included to release build
-   `HTMLTemplate` - main app index.html file template
-   `templateParameters` - variables that you will use inside html file like this: `<title><%= title %></title>`
-   `https` - run DevServer with https (by default it's off)
-   `port` - port number for local server (by default it will be 8080)

## 4. Put following values to `scripts` block of your package.json

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
