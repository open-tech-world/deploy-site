const { writeFile } = require('fs');
const { promisify } = require('util');

const providerConfig = require('./providerConfig');

const writeFileAsync = promisify(writeFile);

module.exports = async params => {
  const config = providerConfig(params);

  return writeFileAsync('deploy.json', JSON.stringify(config, null, 4));
};
