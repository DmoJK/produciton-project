import webpack from "webpack"
import { buildCssLoader } from "./loaders/buildCssLoader"
import { buildSvgLoader } from "./loaders/buildSvgLoader"
import { BuildOptions } from "./types/config"
import { buildBabelLoader } from "./loaders/buildBabelLoader"

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const svgLoader = buildSvgLoader()
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  }
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true })

  const cssLoaders = buildCssLoader(isDev)

  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: "ts-loader",
  //   exclude: /node_modules/,
  // }

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    // typescriptLoader,
    cssLoaders,
  ]
}
