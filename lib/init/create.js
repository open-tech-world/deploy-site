const { writeFile } = require('fs');
const { promisify } = require('util');

const providerConfig = require('./providerConfig');

const writeFileAsync = promisify(writeFile);

module.exports = async (params, projectPath = './deploy.json') => {
  const config = providerConfig(params);

  return writeFileAsync(projectPath, JSON.stringify(config, null, 4));
};
