const express = require('express');
const fetch = require('node-fetch');
const { port, apiBaseUrl, apiToken } = require('./server-conf.json');

const app = express();
const agent = new https.Agent({
  rejectUnauthorized: false
});
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

const getSettings = () => {
  fetch('https://hw.shri.yandex/api/conf', {
    headers: { 
      'Authorization': `Bearer ${apiToken}`
    },
    agent: agent
  })
  .then((result) => result.json())
  .then((settings) => {
    console.info('Settings received');
    //нужно куда-то сохранить настройки, чтобы их откуда-то брать потом
  })
};

app.listen(port, () => console.info(`Server started on port ${port}`));
