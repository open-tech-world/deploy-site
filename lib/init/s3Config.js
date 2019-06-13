module.exports = params => {
  const config = { s3: {} };
  const defaultProps = {
    buildDir: params.buildDir,
    bucket: params.bucket,
    removeOldFileIgnorePatterns: [],
    noCacheFilePatterns: ['service-worker.js', 'serviceWorker.js'],
  };
  const envArr = params.env.split(',').map(env => env.trim());
  envArr.forEach(env => {
    const clonedDefaultProps = { ...defaultProps };
    clonedDefaultProps.envFile = `.env.${env}`;
    config.s3[env] = clonedDefaultProps;
  });
  return config;
};
