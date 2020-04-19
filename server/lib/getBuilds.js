const getHttpsAgent = require('./getHttpsAgent');
const { apiBaseUrl, apiToken } = require('../server-conf.json');
const fetch = require('node-fetch');

module.exports = () => {
  return fetch(`${apiBaseUrl}build/list`, {
    headers: { 
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json'
    },
    agent: getHttpsAgent()
  }).
  then(result => result.json()).
  then(result => result.data);
};
