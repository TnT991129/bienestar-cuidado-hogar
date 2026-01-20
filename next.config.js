/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/bienestar-cuidado-hogar' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bienestar-cuidado-hogar/' : '',
}

module.exports = nextConfig