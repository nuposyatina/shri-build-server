const getHttpsAgent = require('../../lib/getHttpsAgent');
const { apiBaseUrl, apiToken } = require('../server-conf.json');
const fetch = require('node-fetch');

module.exports = async () => {
  const response = await fetch(`${apiBaseUrl}build/list`, {
    headers: { 
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json'
    },
    agent: getHttpsAgent()
  });
  const result = await response.json();
  return result.data;
};
