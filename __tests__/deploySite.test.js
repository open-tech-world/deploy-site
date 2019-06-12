const { existsSync } = require('fs');

const init = require('../lib/init/create');
const build = require('../lib/build');

describe('create deploy.json file', () => {
  test('the empty params fails with an error', async () => {
    expect.assertions(1);
    await expect(init({})).rejects.toThrow();
  });

  test('the invalid params fails with an error', async () => {
    expect.assertions(1);
    await expect(init({ provider: 'unknown' })).rejects.toThrow();
  });

  it('creates a s3 config file with staging & production env', async () => {
    await init(
      { provider: 's3', env: 'staging, production' },
      '__tests__/react-app'
    );
    expect(existsSync('__tests__/react-app/deploy.json')).toBeTruthy();
  });
});

describe('build app', () => {
  test('the empty params fails with an error', async () => {
    expect.assertions(1);
    await expect(build()).rejects.toThrow();
  });

  test('the invalid provider fails with an error', async () => {
    expect.assertions(1);
    await expect(
      build('unknown', '', '__tests__/react-app/deploy.json')
    ).rejects.toThrow('No such provider(unknown) found');
  });

  test('the invalid env fails with an error', async () => {
    expect.assertions(1);
    await expect(
      build('s3', 'test', '__tests__/react-app/deploy.json')
    ).rejects.toThrow('No such environment(test) found');
  });
});
