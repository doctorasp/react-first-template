const path = require('path')


module.exports = {
    entry: {
        main: path.resolve(__dirname, './app/main.js'),
    },

    output: {
        path: path.resolve(__dirname, './'),
        filename: 'bundle.js',
    },


    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './'),
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },

    module: {
        rules: [
            // JavaScript, Babel settings
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },

            //import static images

            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },

            // fonts and SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },

}