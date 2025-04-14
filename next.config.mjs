/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false, // ⛔ Prevent Node 'canvas' module resolution
    };
    return config;
  },
};

export default nextConfig;
