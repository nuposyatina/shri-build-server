const { setAgent } = require('../lib/agents');

// Тоже самое что в нотифай билд агент
// Нужно авэйтить и трай кетчить
module.exports = (req, res, next) => {
  const hasAgent = req.body && req.body.host && req.body.port;
  if (!hasAgent) return next(new Error('Agent data is invalid'));
  setAgent(req.body);
  res.send({ ok: true });
};
