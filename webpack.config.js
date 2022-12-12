const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
    compress: true,
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/index.html`,
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.(pcss|css$)/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      handlebars: 'handlebars/dist/handlebars.js',
      core: path.resolve(__dirname, 'src/core'),
      helpers: path.resolve(__dirname, 'src/helpers'),
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      styles: path.resolve(__dirname, 'src/styles'),
      store: path.resolve(__dirname, 'src/store'),
      router: path.resolve(__dirname, 'src/router'),
      socket: path.resolve(__dirname, 'src/socket'),
      HOCs: path.resolve(__dirname, 'src/HOCs'),
      api: path.resolve(__dirname, 'src/api'),
      controllers: path.resolve(__dirname, 'src/controllers'),
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
