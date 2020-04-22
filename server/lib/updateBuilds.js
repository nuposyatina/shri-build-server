const DELAY = 15000;
const BUILD_STATUS = 'Waiting';
const getBuilds = require('./getBuilds');


const updateBuilds = (cb) => {
  setTimeout(async () => {
    console.log('запустили обновление списка билдов')
    const builds = await getBuilds();
    console.log(`список билдов: ${builds}`)
    const newBuilds = builds.filter((build) => build.status === BUILD_STATUS);
    console.log(`новый список билдов: ${newBuilds}`);
    if (newBuilds.length) {
      console.log('Получили список новых билдов, пора распределить их по агентам')
      await cb(newBuilds);
    }
    console.log('сейчас заново запустим обновление')
    updateBuilds(cb);
  }, DELAY);
}

module.exports = updateBuilds;