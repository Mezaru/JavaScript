var path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");  

module.exports = {
    mode: 'development', 
    entry: './code.js', // which file to begin with
    output: {
      path: path.resolve(__dirname, "dist"), // what folder to put bundle in
      filename: 'bundle.js' // what name to use for bundle
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"), // the root for the server
        watchContentBase: true, // so we reload if other stuff like CSS changes
        port: 9000, // it'll now be at http://localhost:9000
    },
    plugins: [
        new WebpackNotifierPlugin({alwaysNotify: true}),
      ]
  };