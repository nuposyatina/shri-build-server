const express = require('express');
const fetch = require('node-fetch');
const config = require('./agent-conf.json');
const notifyAgent = require('./lib/notifyAgent');

const app = express();


app.listen(config.port, () => {
  console.info(`Agent started on port ${config.port}`);
  notifyAgent(config);
});
