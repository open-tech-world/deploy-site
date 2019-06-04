const ora = require('ora');

const runCommand = require('./runCommand');
const deploy = require('./deploy');
const error = require('./error');
const parseConfig = require('./parseConfig');
const build = require('./build');

module.exports = async () => {
  const args = process.argv.slice(2);
  const provider = args[0];
  const env = args[1];
  const cmd = (args[0] || '').trim();

  if (cmd.charAt(0) === '-') {
    runCommand(cmd);
    return;
  }

  let config = {};
  try {
    config = await parseConfig();
    if (!config[provider]) {
      throw new Error(`No such provider(${provider}) name found`);
    }
    if (!config[provider][env]) {
      throw new Error(`No such environment(${env}) name found`);
    }
  } catch (err) {
    error(err.message);
  }

  const buildSpinner = ora('Building your app').start();
  try {
    await build(env);
    buildSpinner.succeed(`Build completed`);
  } catch (err) {
    buildSpinner.fail('Build failed!');
    error(err.message);
  }

  try {
    deploy(config, provider, env);
  } catch (err) {
    error(err.message);
  }
};
