const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optmizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  optimization: {
    // En produccion los .css sera minificados con el plugin
    minimizer: [new optmizeCssAssetsPlugin()]
  },
  module: {
    rules: [
      {
        // Estilos espeficos de cada componente
        test: /\.css$/,
        exclude: /style\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // Para mantener los estilos globales
        test: /style\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false }
          }
        ]
      },
      // Manipulacion de imagenes
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              // Para guardar las imagenes en la carpeta especifica
              // Manteniendo el mismo nombre y extension
              name: 'assets/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new miniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false
    })
  ]
};
