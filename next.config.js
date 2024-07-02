// next.config.js
const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.publicPath = '/_next/';
    }
    return config;
  },
  // Add any other Next.js configuration here
};
