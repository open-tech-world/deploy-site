const path = require('path');

const s3 = require('./s3');

module.exports = async (provider, projectPath) => {
  const buildPath = path.join(process.cwd(), projectPath, 'build');
  switch (provider) {
    case 's3':
      s3(buildPath);
      break;
    default:
      throw new Error('Invalid service provider');
  }
};
