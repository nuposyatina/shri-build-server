const { spawn } = require('child_process');

module.exports = function sh(command, args, options) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, options);

    let out = '';

    const onData = (chunk) => { out += chunk; }

    child.stdout.on('data', onData);
    child.stderr.on('data', onData);

    child.once('close', () => resolve(out));
    child.once('error', reject);
  });
};