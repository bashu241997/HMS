/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/overview',
            permanent: true,
          },
          {
            source: '/configuration',
            destination: '/configuration/profile',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
