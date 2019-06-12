const { readFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);

module.exports = async projectPath => {
  const rawData = await readFileAsync(projectPath, { encoding: 'utf8' });
  return JSON.parse(rawData);
};
