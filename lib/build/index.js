const path = require('path');
const parseEnvFile = require('@open-tech-world/parse-env-file');
const execa = require('execa');

const parseConfig = require('./parseConfig');

module.exports = async (provider, env, projectPath = './') => {
  let config = {};
  config = await parseConfig(path.join(projectPath, 'deploy.json'));

  if (!config[provider]) {
    throw new Error(`No such provider(${provider}) found`);
  }
  if (!config[provider][env]) {
    throw new Error(`No such environment(${env}) found`);
  }

  const { envFile } = config[provider][env];
  const envVars = await parseEnvFile(path.join(projectPath, envFile));

  return execa('npm', ['run', 'build'], {
    shell: true,
    cwd: projectPath,
    env: envVars,
  });
};
