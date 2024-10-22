/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.tibia.com",
      },
    ],
  },
};

export default nextConfig;
