const { nextAgent } = require('./agents');
const fetch = require('node-fetch');

module.exports = (build, agents) => {
  const { value, done } = nextAgent(agents);
  if (done) return;
  return fetch(`http://${value.host}:${value.port}/build`, {
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