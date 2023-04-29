const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  return {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
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
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin(),
    ],
    devServer: {
      historyApiFallback: true,
    },
  };
};
