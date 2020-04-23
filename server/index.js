const express = require('express');
const { port } = require('./server-conf.json');
const cors = require('./middlewares/cors');
const notifyAgent = require('./http/notify-agent');
const notifyBuildResults = require('./http/notify-build-results');
const updateBuilds = require('./lib/updateBuilds');
const startBuilds = require('./lib/startBuilds');

const app = express();
app.use(cors);
app.use(express.json());

app.post('/notify-agent', notifyAgent);
app.post('/notify-build-result', notifyBuildResults);

app.listen(port, () => {
  console.info(`Server started on port ${port}`);
  updateBuilds(startBuilds);
});