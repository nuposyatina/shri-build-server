const fetch = require('node-fetch');

module.exports = async (build, agent) => {
  const response = await fetch(`http://${agent.host}:${agent.port}/build`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(build)
  });
  const result = await response.json();
  return result;
};
