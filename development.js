import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
const MiniCssExtractPlugin =require('mini-css-extract-plugin');

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default {
  mode: 'development',
  entry: src + '/index.jsx',

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx$|.js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css|.scss/,
        use :[
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader:'sass-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename:'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
}
