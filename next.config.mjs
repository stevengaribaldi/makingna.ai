/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'techcrunch.com',
      },
      {
        protocol: 'https',
        hostname: 'yehfedra.com',
      },
      {
        protocol: 'https',
        hostname: 'wordpress-1286770-4665312.cloudwaysapps.com',
      },
    ],
  },
};

export default nextConfig;