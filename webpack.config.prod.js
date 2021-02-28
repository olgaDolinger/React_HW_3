const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  mode: "production",
  context: path.join(__dirname, "src"),
  entry: "./index.jsx",

  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, "./src"), "./node_modules"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(ttf)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]?[path]",
        },
      },
      {
        test: /\.png$/,
        use: [
          {
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
            loader: "file-loader",
          },
        ],
      },
    ],
  },


  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "React HW 3",
      template: "./index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new LodashWebpackPlugin({
      flattening: true,
      currying: true,
      placeholders: true,
      shorthands: true,
    }),
  ],
};
