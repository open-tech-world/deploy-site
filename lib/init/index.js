const inquirer = require('inquirer');
const ora = require('ora');

const questions = require('./questions');
const create = require('./create');

module.exports = async () => {
  const params = await inquirer.prompt(questions);
  const spinner = ora('Creating config file').start();
  try {
    await create(params);
    spinner.succeed(
      `"deploy.json" config file has been created in your project root.`
    );
  } catch (error) {
    spinner.fail(error.message);
  }
};
