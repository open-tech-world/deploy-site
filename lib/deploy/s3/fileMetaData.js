const path = require('path');
const mime = require('mime-types');

module.exports = file => {
  const meta = {};
  const ext = path.extname(file);
  if (ext === '.html') {
    meta.CacheControl = 'no-cache';
  }
  //   if (ext === '.js') {
  //     meta.ContentEncoding = 'gzip';
  //   }
  //   if (ext === '.css') {
  //     meta.ContentEncoding = 'gzip';
  //   }
  meta.ContentType = mime.lookup(file);
  return meta;
};
