# dotenv-asset-webpack-plugin
A simple webpack plugin that turns environment variables from dotenv into a webpack asset.

Single page applications that try to conform with [The Twelve-Factor App](https://12factor.net/) typically have the same problem in common: Runtime configuration (e.g. API base URIs) that should not be included in the production build, as these are depending on the environment the application is deployed in. A possible solution to this problem is to have the webserver provide an endpoint such as `/env.js` that include a JSON object with all relevant runtime configs.

This plugin aims to streamline the development side of that workflow, by creating an `/env.js` asset from your local `.env` file, so the application can function the same way as it would in production or other non-local environments. Therefore it is recommended to only use this plugin in your development-specific webpack config.

## Usage
Include the plugin in your webpack config
```javascript
const DotenvAssetWebpackPlugin = require('dotenv-asset-webpack-plugin');
```
```javascript
plugins: [
    new DotenvAssetWebpackPlugin(),
]
```

Add the generated env.js to your site
```html
<script src="/env.js"></script>
```

Environment configuration will be available through
```javascript
window.environmentConfiguration
```
