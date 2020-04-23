const finishBuild = require('../lib/finishBuild');

// Нужно авэйтить finishBuild, и обернуть в трай кетч,
// в некст передавать ошибку, если она возникла
module.exports = (req, res, next) => {
  const { id, status, log } = req.body;
  // TODO: нужно считать время билда в агенте, и передавать сюда
  // На старте билда берем текущее время +(new Date()) и запоминаем
  // В конце билда берем текущее время +(new Date()) и запоминаем
  // времяБилда = времяКонца - времяНачала
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
