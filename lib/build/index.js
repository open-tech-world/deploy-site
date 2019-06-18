const path = require('path');
const execa = require('execa');

const parseConfig = require('./parseConfig');
const validate = require('./validate');
const getEnvVars = require('./getEnvVars');

module.exports = async (provider, env, projectPath = './') => {
  const config = await parseConfig(path.join(projectPath, 'deploy.json'));
  validate(config, provider, env);

  const { envFile } = config[provider][env];
  const envVars = await getEnvVars(projectPath, envFile);

  await execa('npm', ['run', 'build'], {
    shell: true,
    cwd: projectPath,
    env: envVars,
  });

  return envVars;
};
