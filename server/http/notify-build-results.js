const finishBuild = require('../lib/finishBuild');

module.exports = (req, res, next) => {
  const { id, status, log } = req.body;
  // TODO: нужно считать время билда
  const buildResult = {
    buildId: id,
    duration: 0,
    success: status === 'Success',
    buildLog: log
  };
  const body = JSON.stringify(buildResult);
  console.log('br', body);
  finishBuild(body);
  res.send({ ok: true });
};
