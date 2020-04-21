const { port, apiBaseUrl, apiToken } = require('../server-conf.json');
const fetch = require('node-fetch');
const getHttpsAgent = require('../../lib/getHttpsAgent');

module.exports = (req, res, next) => {
  const { id, status, log } = req.body;
  // TODO: нужно считать время билда
  const buildResult = {
    buildId: id,
    duration: 0,
    success: status === 'Success',
    buildLog: log
  };
  const body = JSON.stringify(buildResult);
  console.log('br', body);
  fetch(`${apiBaseUrl}build/finish`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json'
    },
    agent: getHttpsAgent(),
    body
  }).then(response => console.log(response.status, 'status'));
  res.send({ ok: true });
};
