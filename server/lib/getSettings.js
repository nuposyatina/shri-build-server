const getHttpsAgent = require('./getHttpsAgent');

module.exports = () => {
  fetch(`${apiBaseUrl}conf`, {
    headers: { 
      'Authorization': `Bearer ${apiToken}`
    },
    agent: getHttpsAgent()
  })
  .then((result) => result.json())
  .then((settings) => {
    console.info('Settings received');
    //нужно куда-то сохранить настройки, чтобы их откуда-то брать потом
  })
};