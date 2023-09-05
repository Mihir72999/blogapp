export { default } from 'next-auth/middleware'


export const config = { matcher: ["/blogs/:path*" , "/tags/:path*" , "/api/hello" , "/api/auth/:path*"] }    