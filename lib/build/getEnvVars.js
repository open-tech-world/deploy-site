const path = require('path');

const parseEnvFile = require('@open-tech-world/parse-env-file');

module.exports = (projectPath, envFile) => {
  return parseEnvFile(path.join(projectPath, envFile));
};
