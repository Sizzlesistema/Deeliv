const path = require('path');

module.exports = {
  entry: './src/index.js', // Ponto de entrada do seu aplicativo
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // Regra para CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Regra para imagens
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    open: true,
  },
};
