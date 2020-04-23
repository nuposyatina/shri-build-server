const { nextAgent, unregisterAgent } = require('./agents');
const sendToAgent = require('./sendToAgent');

module.exports = async (build, agents) => {
  const { value, done } = nextAgent(agents);
  if (done) return ({ ok: false });
  console.info(`Запускаем билд на агенте с портом ${value.port}`);
  unregisterAgent(`${value.host}:${value.port}`);
  return sendToAgent(build, value);
}