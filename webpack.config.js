/**
 * Created by azeyda on 5/1/16.
 */
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "./dist/bundle.js"
  },

  devtool: "source-map",

  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ],

    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};