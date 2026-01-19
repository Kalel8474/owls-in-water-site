/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'owlsinwater-media.s3.us-east-2.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
