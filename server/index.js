const express = require('express');
const { port, apiBaseUrl, apiToken } = require('./server-conf.json');
const cors = require('./middlewares/cors');
const notifyAgent = require('./http/notify-agent');
const updateBuilds = require('./lib/updateBuilds');

const app = express();
app.use(cors);
app.use(express.json());

app.post('/notify-agent', notifyAgent);

app.listen(port, () => console.info(`Server started on port ${port}`));

updateBuilds((builds) => {
  // Что-то делаем с билдами
});