const express = require('express');
const fetch = require('node-fetch');
const config = require('./agent-conf.json');
const notifyAgent = require('./lib/notifyAgent');
const build = require('./http/build');

const app = express();
app.use(express.json());

app.post('/build', build);


app.listen(config.port, () => {
  console.info(`Agent started on port ${config.port}`);
  notifyAgent(config);
});
