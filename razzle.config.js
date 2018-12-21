'use strict';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

// extending https://github.com/jaredpalmer/razzle/blob/v2.4.0/packages/razzle/config/createConfig.js
module.exports = {
  modify: (config, { target, dev }, webpack) => {
    const appConfig = Object.assign({}, config);
    // console.log('target', target, 'dev', dev);
    // console.log('config.resolve.modules', appConfig.resolve.modules);
    
    // Setup SCSS
    if (target === 'web') {
      appConfig.module.rules.push(
        {
          test: /\.scss$/,
          use: [{
            // fallback to style-loader in development
            loader: dev ? 'style-loader' : MiniCssExtractPlugin.loader,
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }]
        }
      );
     
    } else {
      // On the server, we can just simply use css-loader to
      // deal with scss imports
      appConfig.module.rules.push({
        test: /.scss$/,
        use: 'css-loader',
      });
    }

    appConfig.node = {
      fs: "empty" // convince webpack that we can use fs
    };
    return appConfig;
  },
  plugins: ['typescript'],
};