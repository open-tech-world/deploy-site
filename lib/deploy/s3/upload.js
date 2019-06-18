const S3 = require('aws-sdk/clients/s3');

const fileMetaData = require('./fileMetaData');

module.exports = (key, stream) => {
  const s3 = new S3({
    accessKeyId: '',
    secretAccessKey: '',
  });
  const uploadParams = {
    Bucket: '',
    Key: key,
    Body: stream,
    ACL: 'public-read',
    ...fileMetaData(key),
  };
  s3.upload(uploadParams, (err, data) => {
    console.log(err, data);
  });
};
