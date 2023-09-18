import webpack from "webpack"

import { buildBabelLoader } from "./loaders/buildBabelLoader"
import { buildCssLoader } from "./loaders/buildCssLoader"
import { buildSvgLoader } from "./loaders/buildSvgLoader"
import { BuildOptions } from "./types/config"

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

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    cssLoaders,
  ]
}
