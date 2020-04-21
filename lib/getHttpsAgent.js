const https = require('https');

module.exports = () => {
  return new https.Agent({
    rejectUnauthorized: false
  });
};
