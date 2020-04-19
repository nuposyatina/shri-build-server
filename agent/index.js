const express = require('express');
const fetch = require('node-fetch');
const config = require('./agent-conf.json');
const notifyAgent = require('./lib/notifyAgent');

const app = express();
app.use(express.json());

app.post('/build', (req, res) => {
  console.log(req)
  console.log('Взял билд в работу')
  console.log(req.body)
  res.send({ ok: true });
})


app.listen(config.port, () => {
  console.info(`Agent started on port ${config.port}`);
  notifyAgent(config);
});
