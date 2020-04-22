const { apiBaseUrl, apiToken } = require('../server-conf.json');
const fetch = require('node-fetch');
const getHttpsAgent = require('../../lib/getHttpsAgent');

module.exports = (build) => {
  const { id } = build;
  console.log(build)
  const body = JSON.stringify({
    buildId: id,
    dateTime: new Date().toISOString()
  });
  console.log(body)
  return fetch(`${apiBaseUrl}build/start`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json'
    },
    agent: getHttpsAgent(),
    body
  })
  .then(result => console.log(result.status, 'отправили в БД инфу о старте билда'));
}