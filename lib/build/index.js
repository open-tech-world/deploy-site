const parseConfig = require('./parseConfig');

module.exports = async (provider, env, projectPath = './deploy.json') => {
  let config = {};
  config = await parseConfig(projectPath);

  if (!config[provider]) {
    throw new Error(`No such provider(${provider}) found`);
  }
  if (!config[provider][env]) {
    throw new Error(`No such environment(${env}) found`);
  }
};
