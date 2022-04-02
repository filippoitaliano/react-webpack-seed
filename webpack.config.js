const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin(),
    ],
    devServer: {
      historyApiFallback: true,
    },
  };
};
