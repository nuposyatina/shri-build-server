const { getAgents } = require('./agents');
const fetch = require('node-fetch');

module.exports = (build) => {
  const agents = getAgents();
  if (!agents.length) return;
  const agent = agents[0];
  return fetch(`http://${agent.host}:${agent.port}/build`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(build)
  }).then(result => result.json())
  .then(result => {
    console.log(result.body, 'body')
    return result.body
  });
}