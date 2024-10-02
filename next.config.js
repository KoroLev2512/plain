/** @type {import('next').NextConfig} */

const nextConfig = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ru'],
    },
    trailingSlash: true,
    output: "standalone",
    reactStrictMode: false,
    swcMinify: true,
    images: {
        unoptimized: true,
        domains: ["localhost", "http.cat"],
    },
    env: {
        NEXT_PUBLIC_INTERNAL_HOST: process.env.NEXT_PUBLIC_INTERNAL_HOST,
        NEXT_PUBLIC_PUBLIC_HOST: process.env.NEXT_PUBLIC_PUBLIC_HOST,
    },
    serverRuntimeConfig: {
        host: process.env.NEXT_PUBLIC_INTERNAL_HOST,
    },
    publicRuntimeConfig: {
        host: process.env.NEXT_PUBLIC_PUBLIC_HOST,
    },
}


module.exports = nextConfig;
