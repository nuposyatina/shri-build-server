const fetch = require('node-fetch');

module.exports = ({ serverHost, serverPort, port, host }) => {
  const body = JSON.stringify({ host, port });
  return fetch(`http://${serverHost}:${serverPort}/notify-agent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  })
  //TODO: сделать проверку статуса ответа и переотправку в случае ошибки
};
