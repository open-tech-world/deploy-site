module.exports = envVars => {
  return [
    {
      type: 'input',
      name: 'bucket',
      message: 'Bucket',
      default: envVars.AWS_S3_BUCKET,
      validate: i => (i.trim().length > 0 ? true : 'Invalid bucket name'),
    },
    {
      type: 'input',
      name: 'accessKeyId',
      message: 'accessKeyId',
      default: envVars.AWS_ACCESS_KEY_ID,
      validate: i => (i.trim().length > 0 ? true : 'Invalid accessKeyId'),
    },
    {
      type: 'input',
      name: 'secretAccessKey',
      message: 'secretAccessKey',
      validate: i => (i.trim().length > 0 ? true : 'Invalid secretAccessKey'),
    },
  ];
};
