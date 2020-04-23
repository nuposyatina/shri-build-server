const { nextAgent, unregisterAgent, getAgents, agents } = require('./agents');
const fetch = require('node-fetch');

module.exports = async (build, agents) => {
  const { value, done } = await nextAgent(agents);
  console.log('получаем текущее значение агента', value, done)
  if (done) return ({ ok: false });
  console.log(`агенты еще не закончились, запускаем билд на агенте с портом ${value.port}`)
  await unregisterAgent(`${value.host}:${value.port}`);
  console.log('Убрали агента из списка зарегистрированных')
  return fetch(`http://${value.host}:${value.port}/build`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(build)
  }).then(result => result.json())
  .then(result => {
    console.log(result, 'получил ли агент билд')
    return result
  });
}