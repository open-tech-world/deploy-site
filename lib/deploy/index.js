const ora = require('ora');

const build = require('./build');

module.exports = async () => {
  const spinner = ora('Building your app').start();
  try {
    await build();
    spinner.succeed(`Build completed`);
  } catch (error) {
    spinner.fail(error.message);
  }
};
