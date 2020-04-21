const runBuild = require('../lib/runBuild.js');

module.exports = (req, res) => {
  console.log(req)
  console.log('Взял билд в работу')
  console.log(req.body)
  runBuild(req.body);
  res.send({ ok: true });
};
