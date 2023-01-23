const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/script.js",
  devtool: "inline-source-map",
  target: "web",

  devServer: {
    static: "./src",
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Template",
      template: "./src/template.html",
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
