const fetch = require('node-fetch');
const { serverHost, serverPort } = require('../agent-conf.json');

module.exports = async (agent) => {
  const response = await fetch(`http://${serverHost}:${serverPort}/notify-agent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: agent
  });
  return response;
}