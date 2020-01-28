const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'name-here',
            template: './src/index.html',
        }),
    ],
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
}
