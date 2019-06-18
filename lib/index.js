const ora = require('ora');

const runCommand = require('./runCommand');
const deploy = require('./deploy');
const error = require('./error');
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

  const buildSpinner = ora('Building your app').start();
  try {
    await build(provider, env, args[2]);
    buildSpinner.succeed(`Build completed`);
  } catch (err) {
    buildSpinner.fail('Build failed!');
    error(err.message);
  }

  try {
    await deploy(provider);
  } catch (err) {
    error(err.message);
    error('Deployment failed!');
  }
};
