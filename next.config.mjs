/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/24-hour-tyre-fitting",
        destination: "/tyre-fitting-near-me",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
