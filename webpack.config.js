const path = require('path');
console.log("99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        main: path.join(__dirname,'./src/game.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js',
        // publicPath: 'dist/' 
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
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
                // loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(htm|html)$/i,
                 use:[ 'html-withimg-loader'] 
            }
        ]
    },
    devServer: {
        publicPath: "/dist/",
        port: 3000
    },
    plugins: [
        // new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            filename:'./abb.html',
            template:path.join(__dirname,'./src/game.html'),
            inject:['main']
        })
    ]
}