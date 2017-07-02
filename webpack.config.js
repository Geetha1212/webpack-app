var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  //https://webpack.github.io/docs/multiple-entry-points.html
  entry: {
    a: "./src/js/app.js",
    b: "./src/js/app2.js"
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name]-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract(
          {
            fallback: "style-loader" ,
            use: [ "css-loader", "sass-loader" ]
          }
        )
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Webpack Demo Title set in conf file",
      template: "./src/index.html"
    }),
    new ExtractTextWebpackPlugin("styles.css")
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true
  }
}
