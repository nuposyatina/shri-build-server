const { serverHost, serverPort } = require('../agent-conf.json');
const fetch = require('node-fetch');

module.exports = (buildResult) => {
  const body = JSON.stringify(buildResult);
  return fetch(`http://${serverHost}:${serverPort}/notify-build-result`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }).then(result => console.log('sbr', result.status));
  //TODO: сделать проверку статуса ответа и переотправку в случае ошибки
};
