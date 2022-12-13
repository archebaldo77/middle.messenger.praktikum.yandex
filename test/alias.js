const path = require('path');

const config = {
  resolve: {
    alias: {
      helpers: path.resolve(__dirname, 'src/helpers'),
    },
  },
};

module.exports = config;
