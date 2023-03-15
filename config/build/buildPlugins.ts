import webpack from "webpack"
import HTMLWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import { BuildOptions } from "./types/config"

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

export function buildPlugins({
  paths,
  isDev,
  apiUrl,
  project
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    new webpack.HotModuleReplacementPlugin(),
    isDev && new ReactRefreshWebpackPlugin({ overlay: false }), // overlay: false стоит чтобы увидеть PageError
    isDev && new BundleAnalyzerPlugin({ openAnalyzer: false }),
  ].filter(Boolean)
}
