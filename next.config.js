// next.config.js
module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false, // prevent Netlify from resolving 'canvas' module
    };
    return config;
  },
};