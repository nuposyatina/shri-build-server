const getHttpsAgent = require('./getHttpsAgent');

module.exports = () => {
  fetch(`${apiBaseUrl}build/list`, {
    headers: { 
      'Authorization': `Bearer ${AUTH_TOKEN}`
    },
    agent: getHttpsAgent()
  }).
  then(result => result.json()).
  then(result => {
    console.info('Builds received');
    //билды тоже надо куда-то сохранить
  })
}