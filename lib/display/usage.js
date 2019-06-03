const chalk = require('chalk');

module.exports = () => {
  return chalk` {bold.cyan Usage:}

    $ npx @open-tech-world/sw-deploy [flags]

    Available flags:

    -h, --help          Show help
    -v, --version       Show version
  `;
};
