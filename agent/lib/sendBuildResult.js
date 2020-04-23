const config = require('../agent-conf.json');
const notifyBuildResult = require('./notifyBuildResult');
const notifyAgent = require('./notifyAgent');

module.exports = async (buildResult) => {
  try {
    const body = JSON.stringify(buildResult);
    await notifyBuildResult(body);
    await notifyAgent(config);
  } catch (error) {
    console.error(error)
    console.info('Не получается отправить результаты билда на сервер или вновь добавить агента в список свободных, хотя я очень стараюсь :(');
  }
};
