const runBuild = require('../lib/runBuild.js');

module.exports = (req, res) => {
  console.log('Взял билд в работу')
  console.log(req.body)
  runBuild(req.body).catch(console.error);
  res.send({ ok: true });
};
