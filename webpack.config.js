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
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}
