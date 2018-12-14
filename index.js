'use strict'

const fs = require('fs');
const dotenv = require('dotenv');

module.exports = class DotenvAssetWebpackPlugin {
    apply(compiler) {
        const emit = (compilation, callback) => {
            const env = dotenv.parse(fs.readFileSync('./.env'));
            const envJson = JSON.stringify(env);
            const source = `var environmentConfiguration = ${envJson};`;

            compilation.assets['env.js'] = {
                source: () => source,
                size: () => source.length
            };

            callback();
        };

        if (compiler.hooks) {
            compiler.hooks.emit.tapAsync({ name: 'DotenvAssetWebpackPlugin' }, emit);
        } else { /* Webpack 3.x */
            compiler.plugin('emit', emit);
        }
    }
}
