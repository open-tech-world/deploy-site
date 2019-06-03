const header = require('./display/header');
const usage = require('./display/usage');
const error = require('./error');
const { version } = require('../package.json');
const init = require('./init');

module.exports = cmd => {
  switch (cmd) {
    case '--init':
      init();
      break;
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
