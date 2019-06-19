const S3 = require('aws-sdk/clients/s3');

module.exports = async answers => {
  const s3 = new S3({
    accessKeyId: answers.accessKeyId,
    secretAccessKey: answers.secretAccessKey,
  });

  const listData = await s3.listObjects({ Bucket: answers.bucket }).promise();

  const objects = listData.Contents.map(i => ({ Key: i.Key }));
  const params = {
    Bucket: answers.bucket,
    Delete: {
      Objects: objects,
      Quiet: false,
    },
  };

  return s3.deleteObjects(params).promise();
};
