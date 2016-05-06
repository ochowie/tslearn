/**
 * Created by azeyda on 5/1/16.
 */
module.exports = {
  entry: "./tsDist/index.js",
  output: {
    filename: "./dist/bundle.js"
  },

  devtool: "source-map",

  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],

    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
