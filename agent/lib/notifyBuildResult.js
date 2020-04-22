const fetch = require('node-fetch');
const { serverHost, serverPort } = require('../agent-conf.json');


module.exports = (body) => {
  return fetch(`http://${serverHost}:${serverPort}/notify-build-result`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }).then(result => result.status);
}