const { createReadStream } = require('fs');
const path = require('path');
const globby = require('globby');
const inquirer = require('inquirer');
const ProgressBar = require('@open-tech-world/cli-progress-bar');

const upload = require('./upload');
const questions = require('./questions');

module.exports = async (buildPath, envVars) => {
  const answers = await inquirer.prompt(questions(envVars));

  console.log('Deployment started');

  const paths = await globby([buildPath]);
  let count = 0;
  const progressBar = new ProgressBar();
  // eslint-disable-next-line no-restricted-syntax
  for (const f of paths) {
    const key = path.relative(buildPath, f);
    const stream = createReadStream(f);
    // eslint-disable-next-line no-await-in-loop
    await upload(answers, key, stream);
    count += 1;
    progressBar.run(
      'Uploading files',
      count,
      paths.length,
      `[${count}/ ${paths.length}]`
    );
  }
  progressBar.run('Upload completed!', count, paths.length);
  progressBar.stop();

  return Promise.resolve(paths.length);
};
