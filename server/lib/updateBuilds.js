const DELAY = 15000;
const BUILD_STATUS = 'Waiting';
const getBuilds = require('./getBuilds');


const updateBuilds = (cb) => {
  setTimeout(async () => {
    try {
      const builds = await getBuilds();
      const newBuilds = builds
        .filter((build) => build.status === BUILD_STATUS)
        .sort((first, second) => first.buildNumber - second.buildNumber);
      if (newBuilds.length) {
        console.info('Распределяем полученные билды по агентам');
        await cb(newBuilds);
      }
    } catch (error) {
      console.error(error)
    }
    updateBuilds(cb);
  }, DELAY);
}

module.exports = updateBuilds;