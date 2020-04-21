module.exports = (commandLine) => {
  const commands = commandLine.split('&&');
  return commands.map((command) => {
    const [main, ...args] = command.split(' ');
    return { main, args };
  });
}