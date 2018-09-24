var path = require("path");

var DIST_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app.js",
    output: {
        path: DIST_DIR,
        filename: "bundle.js"
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.s?css$/,
                include: SRC_DIR,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {

                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
            // { 
            //     test: /\.jsx?$/, 
            //     include: SRC_DIR,
            //     loader: 'eslint-loader', 
            //     exclude: /node_modules/ 
            // }
        ],

    },
    mode: "development"
};

module.exports = config;