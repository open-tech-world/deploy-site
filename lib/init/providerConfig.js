const s3Config = require('./s3Config');
const ghPagesConfig = require('./ghPagesConfig');

module.exports = params => {
  switch (params.provider) {
    case 's3':
      return s3Config(params);
    case 'gh-pages':
      return ghPagesConfig(params);
    default:
      throw new Error('Invalid provider');
  }
};
