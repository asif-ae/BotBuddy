const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  watchFolders: [
    `${__dirname}/src`, // Specify only the main code folder if necessary
  ],
  resolver: {
    blacklistRE: /node_modules\/.*/, // Exclude node_modules if it's not required
  },
  server: {
    enhanceMiddleware: (middleware) => {
      middleware.poll = true; // Enables polling instead of direct file watching
      middleware.interval = 1000; // Set the interval to 1 second for reduced load
      return middleware;
    },
  }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
