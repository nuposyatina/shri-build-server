const { port, apiBaseUrl, apiToken } = require('../server-conf.json');
const fetch = require('node-fetch');
const getHttpsAgent = require('../../lib/getHttpsAgent');

module.exports = async (buildResult) => {
  //TODO: добавить обработку ошибок
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