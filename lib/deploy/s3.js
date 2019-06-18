// const AWS = require('aws-sdk');
const globby = require('globby');

module.exports = async () => {
  const paths = await globby(['./build']);
  console.log(paths);
};
