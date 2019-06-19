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
    type: 'checkbox',
    name: 'env',
    message: 'Environment',
    choices: [
      { name: 'Production', value: 'production', checked: true },
      { name: 'Staging', value: 'staging' },
    ],
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
  {
    type: 'list',
    name: 'compression',
    message: 'Compress files using gzip? (Default: .js, .css)',
    choices: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
    default: false,
  },
];
