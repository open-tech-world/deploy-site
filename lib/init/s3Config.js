module.exports = params => {
  return {
    s3: {
      [params.env]: {
        buildDir: params.buildDir,
        bucket: params.bucket,
        removeOldFileIgnorePatterns: [],
        noCacheFilePatterns: ['service-worker.js', 'serviceWorker.js'],
      },
    },
  };
};
