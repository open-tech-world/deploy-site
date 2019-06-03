const runCommand = require('./runCommand');
const deploy = require('./deploy');
const error = require('./error');

module.exports = () => {
  const cmd = (process.argv.slice(2)[0] || '').trim();

  if (cmd.charAt(0) === '-') {
    runCommand(cmd);
    return;
  }

  try {
    deploy();
  } catch (err) {
    error(err.message);
  }
};
