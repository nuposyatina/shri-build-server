const runBuild = require('../lib/runBuild.js');

module.exports = (req, res) => {
  console.info(`Взял билд ${req.body.buildNumber} в работу`);
  runBuild(req.body).catch(console.error);
  res.send({ ok: true });
};
