const finishBuild = require('../lib/finishBuild');

const notifyBuildResult = async ({ id, status, log }, count = 0) => {
    // TODO: нужно считать время билда в агенте, и передавать сюда
    // На старте билда берем текущее время +(new Date()) и запоминаем
    // В конце билда берем текущее время +(new Date()) и запоминаем
    // времяБилда = времяКонца - времяНачала
    try {
      const buildResult = {
        buildId: id,
        duration: 0,
        success: status === 'Success',
        buildLog: log
      };
      const body = JSON.stringify(buildResult);
      await finishBuild(body);
    } catch (error) {
      if (count >= 3) throw error;
      count += 1;
      return notifyBuildResult({ id, status, log }, count);
    }
}

module.exports = async (req, res, next) => {
  try {
    await notifyBuildResult(req.body);
    return res.send({ ok: true });
  } catch(err) {
    return next(err);
  }
};
