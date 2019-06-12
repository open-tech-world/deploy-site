const { readFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);

module.exports = async () => {
  const rawData = await readFileAsync('deploy.json', { encoding: 'utf8' });
  return JSON.parse(rawData);
};
