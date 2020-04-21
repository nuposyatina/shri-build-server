const getHttpsAgent = require('./getHttpsAgent');

let settings = null;

module.exports = async () => {
  if (settings) return settings;
  const response = await fetch(`${apiBaseUrl}conf`, {
    headers: { 
      'Authorization': `Bearer ${apiToken}`
    },
    agent: getHttpsAgent()
  });

  if (response.status !== 200) {
    throw new Error('Can\'t get settings');
  }

  settings = await response.json();
  return settings;
};