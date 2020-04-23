const getHttpsAgent = require('../../lib/getHttpsAgent');
const fetch = require('node-fetch');
const { port, apiBaseUrl, apiToken } = require('../../server/server-conf.json');

let settings = null;

module.exports = async () => {
  if (settings) return settings;
  const response = await fetch(`${apiBaseUrl}conf`, {
    headers: { 
      'Authorization': `Bearer ${apiToken}`
    },
    agent: getHttpsAgent()
  });

  if (response.status !== 200) {
    throw new Error('Can\'t get settings');
  }

  return response.json();
};