const parseConfig = require('./parseConfig');

module.exports = async (provider, env) => {
  let config = {};
  config = await parseConfig();

  if (!config[provider]) {
    throw new Error(`No such provider(${provider}) found`);
  }
  if (!config[provider][env]) {
    throw new Error(`No such environment(${env}) found`);
  }
};
