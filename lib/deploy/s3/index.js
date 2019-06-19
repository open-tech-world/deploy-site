const { createReadStream } = require('fs');
const path = require('path');
const globby = require('globby');
const inquirer = require('inquirer');
const ProgressBar = require('@open-tech-world/cli-progress-bar');

const upload = require('./upload');
const questions = require('./questions');
const emptyBucket = require('./emptyBucket');

module.exports = async buildResult => {
  const answers = await inquirer.prompt(questions(buildResult.envVars));

  console.log('Deployment started');

  console.log(`Removing all files from the bucket(${answers.bucket})`);
  await emptyBucket(answers);
  console.log(`Cleaned bucket(${answers.bucket})`);

  const paths = await globby([buildResult.buildPath]);
  let count = 0;
  const progressBar = new ProgressBar();
  // eslint-disable-next-line no-restricted-syntax
  for (const f of paths) {
    const key = path.relative(buildResult.buildPath, f);
    const stream = createReadStream(f);
    // eslint-disable-next-line no-await-in-loop
    await upload(buildResult.config, answers, key, stream);
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
