// const { port, apiBaseUrl, apiToken } = require('../server-conf.json');
const runBuild = require('./runBuild');
const startBuild = require('./startBuild');
const { getAgents } = require('./agents');

// module.exports = (builds) => builds.map((build) => {
module.exports = async (builds) => {
  const agents = getAgents();
  for (const build of builds) {
    // Запрос к API Агента
    // Внутри можно получить и следующий агент, как раз
    const { ok } = await runBuild(build, agents);
    // // Запрос к API БД, если билд был отправлен собираться на агент
    if (ok) await startBuild(build);
    if (!ok) console.info('Нет свободных агентов =(');
  }
// });
};
