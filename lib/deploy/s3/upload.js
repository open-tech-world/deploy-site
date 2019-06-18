const S3 = require('aws-sdk/clients/s3');

const fileMetaData = require('./fileMetaData');

module.exports = async (answers, key, stream) => {
  const s3 = new S3({
    accessKeyId: answers.accessKeyId,
    secretAccessKey: answers.secretAccessKey,
  });

  const uploadParams = {
    Bucket: answers.bucket,
    Key: key,
    Body: stream,
    ACL: 'public-read',
    ...fileMetaData(key),
  };

  return s3.upload(uploadParams).promise();
};
