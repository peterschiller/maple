/**
 * @type {import('next').NextConfig}
 */
const config = {
  images: {
    loader: "custom"
  },
  compiler: {
    styledComponents: true
  },
  eslint: {
    dirs: ["pages", "components", "functions/src", "tests", "analysis"]
  }
}

module.exports = {
  ...config
}
