var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './src/app.js',
	output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html'),
      inject: 'body',
      // favicon: ''
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {

  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    inline: true
  }
}
