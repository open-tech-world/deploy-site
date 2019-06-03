const inquirer = require('inquirer');
const { write, openSync } = require('fs');
const { promisify } = require('util');
const ora = require('ora');

const writeFileAsync = promisify(write);

module.exports = async () => {
  const questions = [
    {
      type: 'list',
      name: 'service',
      message: 'Select a service',
      choices: [
        { name: 'AWS S3', value: 's3' },
        { name: 'Github pages', value: 'gh-pages' },
      ],
    },
    {
      type: 'input',
      name: 'buildDir',
      message: 'Build directory',
      default: 'build',
    },
  ];

  const params = await inquirer.prompt(questions);

  const config = {
    [params.service]: {
      buildDir: params.buildDir,
      removeOldFileIgnorePatterns: [],
      noCacheFilePatterns: ['service-worker.js', 'serviceWorker.js'],
    },
  };

  const spinner = ora('Creating config file').start();
  try {
    const fd = openSync('deploy.json', 'w');
    await writeFileAsync(fd, JSON.stringify(config, null, 4));
    spinner.succeed(
      'deploy.json config file has been created in your project root.'
    );
  } catch (error) {
    spinner.fail(error.message);
  }
};
