// next.config.js
module.exports = {
    webpack: (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false, // Prevent build errors from assuming you're using node-canvas
      };
      return config;
    },
  };