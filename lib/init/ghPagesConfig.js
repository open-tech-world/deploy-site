module.exports = params => {
  return {
    'gh-pages': {
      [params.env]: {
        buildDir: params.buildDir,
        removeOldFileIgnorePatterns: [],
        noCacheFilePatterns: ['service-worker.js', 'serviceWorker.js'],
      },
    },
  };
};
