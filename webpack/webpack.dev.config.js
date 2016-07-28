import webpack from 'webpack'
import path from 'path'
import base_configuration from './webpack.config'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin'
// const configuration = Object.assign(base_configuration)
// configuration.entry = {
//
// }
import {
    paths
} from '../config'

let configuration = merge({}, base_configuration, {
    // devtool: 'cheap-module-inline-source-map',
    output: {
      publicPath: '/'
    },
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
            loader: 'babel',
            include: [
                // /node_modules\/qs/,
                paths.client
            ],
            // exclude: /node_modules/,
            query: {
                presets: [
                    'es2015',
                    'stage-0',
                    'react',
                    'react-hmre'
                ],
                plugins: [
                    'transform-runtime',
                    //'typecheck', // 添加参数校验
                    'transform-decorators-legacy', // 支持装饰器
                    'add-module-exports', // 添加 exports.default的支持
                    //'react-require',
                    //["antd", {style: true}]
                ]
            }

        }]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify('development'),
        //         BABEL_ENV: JSON.stringify('development/client')
        //     },
        //
        //     _client_: true,
        //     _server_: false,
        //     _production_: false,
        //     _development_: true,
        //     _development_tools_: false // <-------- DISABLE redux-devtools HERE
        // }),

        // Slightly faster webpack builds
        // https://github.com/erikras/react-redux-universal-hot-example/issues/616
        new webpack.DllReferencePlugin({
            context: base_configuration.context,
            manifest: require(path.join(base_configuration.output.path, 'vendor-manifest.json'))
        }),
        new HtmlWebpackPlugin({
            template: path.join(paths.client, 'index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new AddAssetHtmlPlugin({
            filename: require.resolve('../build/assets/vendor.dll.js'),
        }),
        // faster code reload on changes
        new webpack.HotModuleReplacementPlugin(),
        // new webpack_isomorphic_tools_plugin(require('./webpack-isomorphic-tools.js')).development(),
        // new webpack.NoErrorsPlugin()
    ]
});
// console.log(JSON.stringify(configuration.module))
export default configuration
