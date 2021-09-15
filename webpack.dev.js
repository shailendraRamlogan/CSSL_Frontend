const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    writeToDisk: true
  },
  plugins: [
    new CopyPlugin({

      patterns: [
        {
          from: 'src/chunks/*.hbs',
          to: path.join(__dirname, 'src', 'chunks_staging/[name].html'),
          toType: 'template',
          force: true,
          noErrorOnMissing: true
        },
        {
          from: 'src/templates/*.hbs',
          to: path.join(__dirname, 'src', 'templates_staging/[name].html'),
          toType: 'template',
          force: true,
          noErrorOnMissing: true
        },
        {
          from: '**/*',
          to: '../assets/elements/chunks/',
          context: path.resolve(__dirname, 'src', 'chunks_production'),
          force: true,
          noErrorOnMissing: true
        },
        {
          from: '**/*',
          to: '../assets/elements/templates/',
          context: path.resolve(__dirname, 'src', 'templates_production'),
          force: true,
          noErrorOnMissing: true
        },
        {
          from: '**/*',
          to:'../assets/elements/snippets/',
          context: path.resolve(__dirname, 'src', 'snippets'),
          force: true,
          noErrorOnMissing: true
        },
        {
          from: '**/*',
          to:'../assets/elements/plugins/',
          context: path.resolve(__dirname, 'src', 'plugins'),
          force: true,
          noErrorOnMissing: true
        }
      ],
    }),
    new ReplaceInFileWebpackPlugin([
      {
        dir: 'src/chunks_staging',
        test: /\.html$/,
        rules: [{
          search: /{{>/g,
          replace: '[[$'
        },{
          search: /}}/g,
          replace: ']]'
        }]
      },
      {
        dir: 'src/templates_staging',
        test: /\.html$/,
        rules: [{
          search: /{{>/g,
          replace: function(match){
            return "[[$"
          }
        },{
          search: /}}/g,
          replace: ']]'
        }]
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //step 3. inject styles into dom
          "css-loader", //step 2. turns css into commonjs
          "sass-loader" //step 1 turns sass into css
        ]
      },
      {
        test: /\.css$/,
        // note Order is from last to first
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      }
    ]
  }
});
