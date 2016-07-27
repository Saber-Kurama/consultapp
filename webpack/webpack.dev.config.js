import webpack from 'webpack'
import path from 'path'
import base_configuration from './webpack.config'
import merge from 'webpack-merge'
// const configuration = Object.assign(base_configuration)
// configuration.entry = {
//
// }
import {
    paths
} from '../config'
console.log(paths.client);
const configuration = merge(base_configuration, {
    devtool: 'cheap-module-inline-source-map',
    module: {
        loaders: [{
            test: /\.css$/,
            include: [
                paths.styles,
                paths.client
            ],
            loaders: [
                'style',
                //`css?sourceMap&${cssOptions.css}`,
                'css?modules&importLoaders=2&localIdentName=[name]-[local]--[hash:base64:5]',
                'postcss'
            ]
        }, {
            test: /\.scss$/,
            include: [
                paths.styles,
                paths.client
            ],
            loaders: [
                'style',
                'css?modules&localIdentName=[name]-[local]--[hash:base64:5]',
                `sass`
            ]
        }, {
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: [
                // /node_modules\/qs/,
                paths.clinet
            ],
            // exclude: /node_modules/,

        }]
    },
    plugins: [
      	new webpack.DefinePlugin
      	({
      		'process.env':
      		{
      			NODE_ENV: JSON.stringify('development'),
      			BABEL_ENV: JSON.stringify('development/client')
      		},

      		_client_            : true,
      		_server_            : false,
      		_production_        : false,
      		_development_       : true,
      		_development_tools_ : false  // <-------- DISABLE redux-devtools HERE
      	}),
        	// Slightly faster webpack builds
        	// https://github.com/erikras/react-redux-universal-hot-example/issues/616
        	new webpack.DllReferencePlugin
        	({
        		context  : base_configuration.context,
        		manifest : require(path.join(base_configuration.output.path, 'vendor-manifest.json'))
        	}),

        	// faster code reload on changes
        	new webpack.HotModuleReplacementPlugin(),
          	// new webpack_isomorphic_tools_plugin(require('./webpack-isomorphic-tools.js')).development()
    ]
});
export default configuration
