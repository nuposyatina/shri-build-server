const path = require('path');
const getSettings = require('./getSettings');
const getCommands = require('./getCommands');
const sendBuildResult = require('./sendBuildResult');
const sh = require('./sh');

const PROJECT_DIR_NAME = 'repo';

module.exports = async (build) => {
  const settings = await getSettings();
  console.log(settings)
  console.log(build, 'runBuild');
  const { id } = build;
  let log = '';
  let status = 'Success';
  try {
    const { repoName, mainBranch, buildCommand } = settings.data;
    const { commitHash } = build;
    const rootDir = path.join(__dirname, '../');
    await sh('rm', ['-rf', PROJECT_DIR_NAME], { cwd: rootDir });
    await sh('git', ['clone', '-b', mainBranch, '--single-branch', `https://github.com/${repoName}`, PROJECT_DIR_NAME], { cwd: rootDir });
    console.info('репозиторий склонирован');
    const buildDir = path.join(rootDir, PROJECT_DIR_NAME);
    await sh('git', ['checkout', commitHash], { cwd: buildDir });
    console.info('чекаут');
    await sh('npm', ['install'], { cwd: buildDir });
    console.info('модули установлены');
    console.log(buildCommand);
    const commands = getCommands(buildCommand);
    for (const command of commands) {
      log += await sh(command.main, command.args, { cwd: buildDir });
    }
    console.info('еще и билд прошел');
  } catch (err) {
    log += err.message;
    console.error(err);
    status = 'Fail';
  }
  // Тут дергаю ручку сервера, что сборка закончена, успешно, или нет
  const buildResult = { id, log, status };
  return sendBuildResult(buildResult);
};
