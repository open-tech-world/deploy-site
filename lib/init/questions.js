module.exports = [
  {
    type: 'list',
    name: 'provider',
    message: 'Select your hosting provider',
    choices: [
      { name: 'AWS S3', value: 's3' },
      { name: 'Github pages', value: 'gh-pages' },
    ],
  },
  {
    type: 'input',
    name: 'env',
    message: 'Environment',
    default: 'production',
  },
  {
    type: 'input',
    name: 'buildDir',
    message: 'Build directory',
    default: 'build',
  },
  {
    type: 'input',
    name: 'bucket',
    message: 'Enter your bucket name',
    when: h => h.provider === 's3',
    validate: i => (i.trim().length > 0 ? true : 'Invalid bucket name'),
  },
];
