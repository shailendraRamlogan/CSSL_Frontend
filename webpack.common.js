const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
require("@babel/register");

module.exports = {
  entry: {
    home:'./src/js/home.js',
    contact: './src/js/contact.js',
    about: './src/js/about.js',
    projects: './src/js/projects.js',
    products: './src/js/products.js',
    productDetail: './src/js/productDetail.js',
    projectDetail: './src/js/projectDetail.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'base',
    }
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/home.hbs",
      filename: "home.html",
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/contact.hbs",
      filename: "contact.html",
      chunks: ['contact']
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/projectDetail.hbs",
      filename: "projectDetail.html",
      chunks: ['projectDetail']
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/aboutUs.hbs",
      filename: "aboutUs.html",
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/projects.hbs",
      filename: "projects.html",
      chunks: ['projects']
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/products.hbs",
      filename: "products.html",
      chunks: ['products']
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/productDetail.hbs",
      filename: "productDetail.html",
      chunks: ['productDetail']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images",
            publicPath: 'assets/images'
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      { test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          partialDirs: [
            path.join(__dirname, 'src', 'chunks')
          ]
        }
      }
    ]
  }
};
