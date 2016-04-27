var path = require("path");
var webpack = require("webpack");
// var static=path.join(__dirname,"/public/js");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var entry="./js/page/reuse.js";
module.exports = {
    context: path.join(__dirname,"public/js/page"),
    entry: {
        entry:"entry",
        interact:"interact",
        jsx:"jsx",
        main:"main",
        reuse:"reuse",
        state:"state",
        mixin:"mixin",
        es6:"es6"
    },
    output: {
        path: "./public/js/dist",
        publicPath: "/public/js/dist",
        filename: "[name].bundle.js"
    },
    resolve: {
        // root: [path.join(__dirname, "bower_components")],
        root: [path.join(__dirname,"public/js"),path.join(__dirname, "bower_components"),path.join(__dirname, "public/js/page")],
        extensions: ['', '.js', '.jsx'],
        alias:{
            module:"./../module"
        }
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        ),
        new ExtractTextPlugin('./public/style.css', {
            allChunks: true
        })
        //new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    compact:false
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    }
};