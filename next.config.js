/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'raw.githubusercontent.com',
        port:'',
        pathname:'/Mihir72999/test-blogpost/main/images/**'
      },
      {
        protocol:'https',
        hostname:'avatars.githubusercontent.com',
        port:'',
        pathname:'/*/**'
      }
    ]
    
  }
}

module.exports = nextConfig
