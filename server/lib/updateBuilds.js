const DELAY = 5000;
const BUILD_STATUS = 'Waiting';

const updateBuilds = (cb) => {
  setTimeout(async () => {
    const builds = await getBuilds();
    const newBuilds = builds.filter((build) => build.status === BUILD_STATUS);
    if (newBuilds.length) {
      await cb(newBuilds);
    }
    updateBuilds(cb);
  }, DELAY);
}

module.exports = updateBuilds;