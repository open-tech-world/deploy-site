const inquirer = require('inquirer');
const { write, openSync } = require('fs');
const { promisify } = require('util');
const ora = require('ora');

const questions = require('./questions');
const providerConfig = require('./providerConfig');

const writeFileAsync = promisify(write);

module.exports = async () => {
  const params = await inquirer.prompt(questions);
  const config = providerConfig(params);
  const spinner = ora('Creating config file').start();
  try {
    const fd = openSync('deploy.json', 'w');
    await writeFileAsync(fd, JSON.stringify(config, null, 4));
    spinner.succeed(
      `"deploy.json" config file has been created in your project root.`
    );
  } catch (error) {
    spinner.fail(error.message);
  }
};
