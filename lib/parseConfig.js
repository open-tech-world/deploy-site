const { readFile, openSync } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);

module.exports = async () => {
  const fd = openSync('deploy.json', 'r');
  const rawData = await readFileAsync(fd);
  return JSON.parse(rawData);
};
