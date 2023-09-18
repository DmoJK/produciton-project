export const buildSvgLoader = () => {
    return {
        test: /\.svg$/i,
        exclude: /node_modules/,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      }
}