const getSettings = require('./getSettings');
const sh = require('./sh');

module.exports = async (build) => {
  const settings = await getSettings();
  console.log(build, 'runBuild');
};
