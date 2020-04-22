// const { port, apiBaseUrl, apiToken } = require('../server-conf.json');
const runBuild = require('./runBuild');
const startBuild = require('./startBuild');
const { getAgents } = require('./agents');

// module.exports = (builds) => builds.map((build) => {
module.exports = async (builds) => {
  const agents = getAgents();
  await builds.forEach((build) => {
    // Запрос к API Агента
    // Внутри можно получить и следующий агент, как раз
    runBuild(build, agents);
    // Запрос к API БД
    startBuild(build);
  });
// });
};
