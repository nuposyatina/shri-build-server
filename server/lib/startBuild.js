const reportStart = require('./reportStart');

const startBuild = async (build, count = 0) => {
  const { id } = build;
  const body = JSON.stringify({
    buildId: id,
    dateTime: new Date().toISOString()
  });
  try {
    const status = await reportStart(body);
    console.info(status, 'отправили в БД инфу о старте билда')
  } catch (error) {
    console.error(error);
    if (count >= 3) return;
    count += 1;
    console.info('Отправка информации не удалась. Пробуем повторить запрос');
    return startBuild(body, count);
    // бОльшее количество раз наверное отправлять нет смысла, потому что билд уже в работе и вскоре он заменит статус на Success или Fail
  }
}

module.exports = startBuild;