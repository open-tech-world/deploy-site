const s3 = require('./s3');

module.exports = async provider => {
  switch (provider) {
    case 's3':
      return s3;
    default:
      throw new Error('Invalid service provider');
  }
};
