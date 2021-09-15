const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const WebpackAssetsManifest = require('webpack-assets-manifest');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = merge(common,{
  mode: "production",
  output: {
    filename: "js/[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "assets/dist"),
    libraryTarget: "this"
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(), new TerserPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          }, //step 3. inject styles into all_entry_points now rather than the dom
          "css-loader", //step 2. turns css into commonjs
          "sass-loader" //step 1 turns sass into css
        ]
      },
      {
        test: /\.css$/,
        // note Order is from last to first
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          }, //step 3. inject styles into all_entry_points now rather than the dom
          {
            loader: 'css-loader', options : { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contentHash].css"
    }),
    new CleanWebpackPlugin(),
    new WebpackAssetsManifest ({
      entrypoints: true,
      entrypointsKey: 'entryPoints',
    }),
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            { source: 'assets/images', destination: 'assets/dist/assets/images' },
          ],
        }
      }
    })
  ]
});
