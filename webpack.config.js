const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const path=require('path');
const http=require('stream-http');

module.exports = {
	// Other rules...
        resolve:{
            fallback:{
                buffer: require.resolve('buffer'),
                crypto: require.resolve('crypto-browserify'),
                http: require.resolve('stream-http'),
                https: require.resolve('https-browserify'),
                os: require.resolve('os-browserify/browser'),
                path: require.resolve('path-browserify'),
                querystring: require.resolve('querystring-es3'),
                stream: require.resolve('stream-browserify'),
                sys: require.resolve('util'),
                url: require.resolve('url'),
               
          } 
        },
       
	plugins: [
		new NodePolyfillPlugin()
	]
};
