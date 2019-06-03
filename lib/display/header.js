const chalk = require('chalk');
const { version } = require('../../package.json');

module.exports = () => {
  return chalk`\n\t{bold.rgb(255, 136, 0) @open-tech-world/sw-deploy} {gray [v${version}]} \n`;
};
