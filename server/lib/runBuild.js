const { nextAgent, unregisterAgent } = require('./agents');
const sendToAgent = require('./sendToAgent');

module.exports = async (build, agents) => {
  const { value, done } = nextAgent(agents);
  console.log('получаем текущее значение агента', value, done)
  if (done) return ({ ok: false });
  console.log(`агенты еще не закончились, запускаем билд на агенте с портом ${value.port}`)
  unregisterAgent(`${value.host}:${value.port}`);
  console.log('Убрали агента из списка зарегистрированных')
  return sendToAgent(build, value);
}