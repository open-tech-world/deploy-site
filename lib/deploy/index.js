const path = require('path');

const s3 = require('./s3');

module.exports = async (envVars, provider, projectPath) => {
  const buildPath = path.join(process.cwd(), projectPath, 'build');
  switch (provider) {
    case 's3':
      return s3(buildPath, envVars);
    default:
      return Promise.reject(new Error('Invalid service provider'));
  }
};
