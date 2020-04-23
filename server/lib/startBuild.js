const reportStart = require('./reportStart');

module.exports = async (build) => {
  const { id } = build;
  const body = JSON.stringify({
    buildId: id,
    dateTime: new Date().toISOString()
  });
  let count = 0;
  try {
    const status = await reportStart(body);
    console.info(status, 'отправили в БД инфу о старте билда')
  } catch (error) {
    console.error(error);
    // бОльшее количество раз наверное отправлять нет смысла, потому что билд уже в работе и вскоре он заменит статус на Success или Fail
    if (count <= 3) {
      console.info('Отправка информации не удалась. Пробуем повторить запрос');
      await reportStart(body);
    }
  }
};