const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry:  {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.[contenthash].js'
    },    
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpe?g)$/,
                type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },
    optimization: {
        minimizer:
        [new CssMinimizerPlugin()]
    }
}

module.exports = (env, { mode }) => {
    if (mode === 'development') {
        config.devServer = {
            static: {
                directory: path.join(__dirname, 'build')
            },
            compress: true,
            port: 8080,
            open: true,
            client: {
                overlay: false
            }
        }
        config.stats = 'minimal';
    } else if (mode === 'production') {
        config.plugins.push(new CleanWebpackPlugin());
        config.stats = 'verbose';
    }
    return config;
  }
