const sendNotify = require('./sendNotify');
const { host, port } = require('../agent-conf.json');

const notifyAgent = async (count = 0) => {
  try {
    const body = JSON.stringify({ host, port });
    await sendNotify(body);
  } catch (error) {
    console.error(error);
    if (count >= 3) return;
    count += 1;
    console.info('Регистрация агента не удалась. Пробуем повторить запрос');
    return notifyAgent(count);
  }
}

module.exports = notifyAgent;
