const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        main: './js.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'dist/' 
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [{
                test: /\.css$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },

                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                // loader: 'file-loader',
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    devServer: {
        publicPath: "/dist/",
        port: 3000
    },
    plugins: [
        // new UglifyJsPlugin(),
        // new HtmlWebpackPlugin({
        //     filename:'/game.html',
        //     template:'./game.html',
        //     inject:['main']
        // })
    ]
}