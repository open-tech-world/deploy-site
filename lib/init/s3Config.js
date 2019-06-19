module.exports = params => {
  const config = { s3: {} };
  const defaultProps = {
    buildDir: params.buildDir,
    bucket: params.bucket,
    cacheFilePatterns: ['**/static/**', '**/favicon.ico'],
    noCacheFilePatterns: [
      '**/index.html',
      '**/service-worker.js',
      '**/serviceWorker.js',
    ],
    compression: false,
    gzip: ['.js', '.css'],
  };
  const envArr = params.env.map(env => env.trim());
  envArr.forEach(env => {
    const clonedDefaultProps = { ...defaultProps };
    clonedDefaultProps.envFile = `.env.${env}`;
    clonedDefaultProps.compression = params.compression;
    config.s3[env] = clonedDefaultProps;
  });
  return config;
};
