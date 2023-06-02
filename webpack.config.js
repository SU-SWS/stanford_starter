const config = require("./src/config");
const Webpack = require("webpack");
const AssetsWebpackPlugin = require('assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

var webpackConfig = {
  entry: {
    "css/main": ["./src/scss/main.scss"],
    "css/ckeditor5": ["./src/scss/ckeditor5.scss"]
  },
  output: {
    path: config.distFolder,
    filename: '[name].js',
    publicPath: config.publicPath,
    clean: true
  },
  mode: config.isProd ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          config.isProd ? { loader: MiniCssExtractPlugin.loader } : 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new AssetsWebpackPlugin({path: config.distFolder}),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
    ]
  }

};

if (config.hmrEnabled) {
  webpackConfig.plugins.push(new Webpack.HotModuleReplacementPlugin());
}
module.exports = webpackConfig;
