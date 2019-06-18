const { createReadStream } = require('fs');
const path = require('path');
const globby = require('globby');

const upload = require('./upload');

module.exports = async buildPath => {
  const paths = await globby([buildPath]);
  paths.forEach(f => {
    const key = path.relative(buildPath, f);
    const stream = createReadStream(f);
    upload(key, stream);
  });
};
