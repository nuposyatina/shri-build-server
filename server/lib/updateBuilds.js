const DELAY = 5000;
const BUILD_STATUS = 'Waiting';
const getBuilds = require('./getBuilds');


const updateBuilds = (cb) => {
  setTimeout(async () => {
    console.log('!!')
    const builds = await getBuilds();
    console.log(builds)
    const newBuilds = builds.filter((build) => build.status === BUILD_STATUS);
    if (newBuilds.length) {
      await cb(newBuilds);
    }
    updateBuilds(cb);
  }, DELAY);
}

module.exports = updateBuilds;