const ora = require('ora');

const runCommand = require('./runCommand');
const deploy = require('./deploy');
const error = require('./error');
const parseConfig = require('./parseConfig');

module.exports = async () => {
  const args = process.argv.slice(2);
  const cmd = (args[0] || '').trim();

  if (cmd.charAt(0) === '-') {
    runCommand(cmd);
    return;
  }

  let config = {};
  const spinner = ora('Verifying config file').start();
  try {
    config = await parseConfig();
    spinner.succeed('Verified config file');
  } catch (err) {
    spinner.fail('No Config file found!');
    error(err.message);
  }

  try {
    deploy(config, args);
  } catch (err) {
    error(err.message);
  }
};
