const { port, apiBaseUrl, apiToken } = require('../server-conf.json');
const fetch = require('node-fetch');
const getHttpsAgent = require('../../lib/getHttpsAgent');

module.exports = (buildResult) => {
  return fetch(`${apiBaseUrl}build/finish`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json'
    },
    agent: getHttpsAgent(),
    body: buildResult
  }).then(response => console.log(response.status, 'финиш'));
}