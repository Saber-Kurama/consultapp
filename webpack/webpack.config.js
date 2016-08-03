import path from 'path'
import webpack from 'webpack'
import sass from 'node-sass'
import config from '../config'
import postcss from './postcss'

var configuration = {
    target: 'web',
    name: config.name,
    context: config.paths.root,
    // entry: {
    //     main: './src/client/app.js'
    // },
    entry: ['./src/client/app.js'],
    output: {
        // filesystem path for static files
        path: path.resolve(config.paths.root, 'build/assets'),
        // network path for static files
        publicPath: '/assets/',

        // file name pattern for entry scripts
        filename: '[name].[hash].js',

        // file name pattern for chunk scripts
        chunkFilename: '[name].[hash].js',
    },
    resolve: {
        root: config.paths.root,
        alias: config.aliases, // 使用别名
        modulesDirectories: ['node_modules'],
        extensions: [
            '',
            '.jsx',
            '.js',
            '.css',
            '.scss',
            '.less',
            '.svg',
            '.png',
            '.json'
        ],
    },
    // 转换加载器
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*']
    },
    // postcss,
    // eslint,

    // profile: config.argv.profile,
    module: {
        loaders: [{
            test: /\.json(\?.+)?$/,
            loader: 'json'
        }, {
            test: /\.woff(\?.*)?$/,
            loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.woff2(\?.*)?$/,
            loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
        }, {
            test: /\.otf(\?.*)?$/,
            loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'
        }, {
            test: /\.ttf(\?.*)?$/,
            loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
        }, {
            test: /\.eot(\?.*)?$/,
            loader: 'file?prefix=fonts/&name=[path][name].[ext]'
        }, {
            test: /\.svg(\?.*)?$/,
            loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url?limit=8192'
        }]
    },
    plugins:[
      new webpack.DefinePlugin({

      }),
      // new webpack.optimize.OccurenceOrderPlugin(true),
      // new webpack.optimize.DedupePlugin()
    ],
    sassLoader: {
      //includePaths: [path.resolve(__dirname, "./some-folder")]
      functions: {
        'px2rem($px)': function(px) {
          return new sass.types.String(parseFloat(px.getValue())*320/750/20 + 'rem');
        }
      }
    },
    postcss
}
module.exports = configuration
