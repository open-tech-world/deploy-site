const path = require('path');

const s3 = require('./s3');

module.exports = async (buildResult, provider, projectPath) => {
  const buildPath = path.join(
    process.cwd(),
    projectPath,
    buildResult.config.buildDir
  );
  switch (provider) {
    case 's3':
      return s3(buildPath, buildResult.envVars);
    default:
      return Promise.reject(new Error('Invalid service provider'));
  }
};
