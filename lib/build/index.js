const path = require('path');
const execa = require('execa');

const parseConfig = require('./parseConfig');
const validate = require('./validate');
const getEnvVars = require('./getEnvVars');

module.exports = async (provider, env, projectPath = './') => {
  const buildConfig = await parseConfig(path.join(projectPath, 'deploy.json'));
  validate(buildConfig, provider, env);

  const config = buildConfig[provider][env];
  const envVars = await getEnvVars(projectPath, config.envFile);

  await execa('npm', ['run', 'build'], {
    shell: true,
    cwd: projectPath,
    env: envVars,
  });

  return { envVars, config };
};
