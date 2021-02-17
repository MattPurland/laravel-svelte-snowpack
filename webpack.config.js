const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'resources/js/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'public/dist/'),
        filename: '[name].js',
        publicPath: './js/'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].[id].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }]
            },
            canPrint: true
        }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            // host: 'localhost',
            // port: 3000,
            // server: { baseDir: ['public'] }
            proxy: '',
            open: false,
            notify:false,
            files: [
                'app/**/*.php',
                'resources/views/**/*.php',
                'public/assets/dist/**/*.js',

                // 'public/assets/css/**/*.css'
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(html|svelte)$/,
                use: 'svelte-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: [
                                    './resources/sass/theme',
                                    './node_modules'
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    }
};
