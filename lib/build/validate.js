module.exports = (config, provider, env) => {
  if (!config[provider]) {
    throw new Error(`No such provider(${provider}) found`);
  }
  if (!config[provider][env]) {
    throw new Error(`No such environment(${env}) found`);
  }
};
