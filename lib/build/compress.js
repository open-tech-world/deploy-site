const zlib = require('zlib');
const fs = require('fs');
const globby = require('globby');

module.exports = async (buildPath, config) => {
  const globParams = config.gzip.map(ext => `${buildPath}/**/**${ext}`);
  const paths = await globby(globParams);

  const tasks = paths.map(file => {
    const gzip = zlib.createGzip();
    const inp = fs.createReadStream(file);
    const out = fs.createWriteStream(`${file}.gz`);
    const stream = inp.pipe(gzip).pipe(out);
    return new Promise((resolve, reject) => {
      stream.on('finish', () => {
        fs.unlinkSync(file);
        fs.renameSync(`${file}.gz`, file);
        resolve(stream);
      });
      stream.on('error', () => reject());
    });
  });

  return Promise.all(tasks);
};
