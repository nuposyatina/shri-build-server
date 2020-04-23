const fetch = require('node-fetch');
const getHttpsAgent = require('../../lib/getHttpsAgent');
const { apiBaseUrl, apiToken } = require('../server-conf.json');

module.exports = async (build) => {
  const response = await fetch(`${apiBaseUrl}build/start`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json'
    },
    agent: getHttpsAgent(),
    body: build
  });
  return response.status;
}

