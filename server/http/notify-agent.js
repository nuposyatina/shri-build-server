const { setAgent } = require('../lib/agents');

module.exports = (req, res, next) => {
  const hasAgent = req.body && req.body.host && req.body.port;
  if (!hasAgent) return next(new Error('Agent data is invalid'));
  setAgent(req.body);
  res.send({ ok: true });
};
