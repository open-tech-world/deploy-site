const { createReadStream } = require('fs');
const path = require('path');
const globby = require('globby');
const inquirer = require('inquirer');

const upload = require('./upload');
const questions = require('./questions');

module.exports = async (buildPath, envVars) => {
  const answers = await inquirer.prompt(questions(envVars));

  console.log('Deployment started');

  const paths = await globby([buildPath]);
  // eslint-disable-next-line no-restricted-syntax
  for (const f of paths) {
    const key = path.relative(buildPath, f);
    const stream = createReadStream(f);
    // eslint-disable-next-line no-await-in-loop
    await upload(answers, key, stream);
  }

  // try {
  // } catch (err) {
  //   return Promise.reject(err);
  // }

  return Promise.resolve(paths.length);
};
