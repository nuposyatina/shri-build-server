const { port, apiBaseUrl, apiToken } = require('../server-conf.json');
const runBuild = require('./runBuild');
const startBuild = require('./startBuild');

// module.exports = (builds) => builds.map((build) => {
module.exports = async (builds) => {
  const build = builds[0];
  console.log(build)
  // Запрос к API Агента
  // Внутри можно получить и следующий агент, как раз
  await runBuild(build);
  // Запрос к API БД
  await startBuild(build);
// });
};
