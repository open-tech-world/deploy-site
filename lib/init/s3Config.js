module.exports = params => {
  const config = { s3: {} };
  const defaultProps = {
    buildDir: params.buildDir,
    bucket: params.bucket,
    removeOldFileIgnorePatterns: [],
    noCacheFilePatterns: ['service-worker.js', 'serviceWorker.js'],
  };
  const envArr = params.env.split(',');
  envArr.forEach(env => {
    config.s3[env.trim()] = defaultProps;
  });
  return config;
};
