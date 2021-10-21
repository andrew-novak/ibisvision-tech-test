import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const isDev = process.env.NODE_ENV !== "production";

export default {
  mode: isDev ? "development" : "production",
  entry: require.resolve("../src/index.js"),
  output: {
    path: path.join(__dirname, "../build"),
    filename: "main.js"
  },
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve("babel-loader")
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        use: "html-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html")
    })
  ],
  devServer: {
    open: true,
    compress: true
  }
};
