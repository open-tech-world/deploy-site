const s3 = require('./s3');

module.exports = async (buildResult, provider) => {
  switch (provider) {
    case 's3':
      return s3(buildResult);
    default:
      return Promise.reject(new Error('Invalid service provider'));
  }
};
