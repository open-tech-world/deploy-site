const path = require('path');
const { writeFile } = require('fs');
const { promisify } = require('util');

const providerConfig = require('./providerConfig');

const writeFileAsync = promisify(writeFile);

module.exports = async (params, projectPath = './') => {
  const config = providerConfig(params);

  return writeFileAsync(
    path.join(projectPath, 'deploy.json'),
    JSON.stringify(config, null, 4)
  );
};
