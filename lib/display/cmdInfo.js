const header = require('./header');
const usage = require('./usage');
const error = require('..//error');
const { version } = require('../../package.json');

module.exports = cmd => {
  switch (cmd) {
    case '-h':
    case '--help':
      console.log(header());
      console.log(usage());
      break;
    case '-v':
    case '--version':
      console.log(`v${version}`);
      break;
    default:
      error(`"${cmd}" is not a valid command!`);
  }
};
