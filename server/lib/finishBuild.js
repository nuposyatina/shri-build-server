const { apiBaseUrl, apiToken } = require('../server-conf.json');
const fetch = require('node-fetch');
const getHttpsAgent = require('../../lib/getHttpsAgent');

module.exports = async (buildResult) => {
  const response = await fetch(`${apiBaseUrl}build/finish`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json'
    },
    agent: getHttpsAgent(),
    body: buildResult
  });
  if (response.status !== 200) {
    throw new Error(`При изменении статуса билда возникла ошибка ${response.status}`);
  }
  return response.status;
}