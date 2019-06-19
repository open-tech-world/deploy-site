const path = require('path');
const mime = require('mime-types');
const micromatch = require('micromatch');

module.exports = (file, config) => {
  const meta = {};
  const ext = path.extname(file);

  if (micromatch.isMatch(file, config.noCacheFilePatterns)) {
    meta.CacheControl = 'no-cache';
  }

  if (micromatch.isMatch(file, config.cacheFilePatterns)) {
    meta.CacheControl = 'max-age=31536000';
  }

  if (config.compression && config.gzip.includes(ext)) {
    meta.ContentEncoding = 'gzip';
  }
  meta.ContentType = mime.lookup(file);
  return meta;
};
