const ora = require('ora');

const deploy = require('./deploy');
const error = require('./error');
const build = require('./build');

module.exports = async (provider, env, projectPath) => {
  let buildResult;
  const buildSpinner = ora('Building your app').start();
  try {
    buildResult = await build(provider, env, projectPath);
    buildSpinner.succeed(`Build completed`);
  } catch (err) {
    buildSpinner.fail('Build failed!');
    error(err.message);
  }

  try {
    await deploy(buildResult, provider, projectPath);
    console.log('Deployment done!');
  } catch (err) {
    error(`Deployment failed! \n\nError: ${err.message}`);
  }
};
