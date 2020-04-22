const config = require('../agent-conf.json');
const notifyBuildResult = require('./notifyBuildResult');
const notifyAgent = require('./notifyAgent');

module.exports = async (buildResult) => {
  const body = JSON.stringify(buildResult);
  const res = await notifyBuildResult(body);
  console.log(res)
  if (res === 200) {
    notifyAgent(config);
  }
  //TODO: сделать проверку статуса ответа и переотправку в случае ошибки
};
