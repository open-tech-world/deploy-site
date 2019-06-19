const chalk = require('chalk');

module.exports = () => {
  return chalk` {bold.cyan Usage:}

    $ npx @open-tech-world/sw-deploy [HOSTING_PROVIDER ENV | command]

    Available commands:

    --init              Creates a config file in the project root
    -h, --help          Show help
    -v, --version       Show version
  `;
};
