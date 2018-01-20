const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
        loaders: [
            {
                test: /\.(png|jpg|gif)$/,
                // loader: 'file-loader',
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
                // loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(htm|html)$/i,
                 use:[ 'html-withimg-loader'] 
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    devServer: {
        publicPath: "/dist/",
        port: 3000
    },
    plugins: [
        // new ExtractTextPlugin("[name][hash:8].css"),
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            filename:'./abb.html',
            template:path.join(__dirname,'./src/game.html'),
            inject:['main']
        }),
        new ExtractTextPlugin("css.css")        
    ]
}