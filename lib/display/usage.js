const chalk = require('chalk');

module.exports = () => {
  return chalk` {bold.cyan Usage:}

    $ npx @open-tech-world/sw-deploy [flags]

    Available flags:

    --init              Create deploy.json config file with basic configurations in the root of project
    -h, --help          Show help
    -v, --version       Show version
  `;
};
