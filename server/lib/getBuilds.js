const getHttpsAgent = require('./getHttpsAgent');
const { apiBaseUrl } = require('../server-conf.json');

module.exports = () => {
  fetch(`${apiBaseUrl}build/list`, {
    headers: { 
      'Authorization': `Bearer ${AUTH_TOKEN}`
    },
    agent: getHttpsAgent()
  }).
  then(result => result.json()).
  then(result => result.data)
}