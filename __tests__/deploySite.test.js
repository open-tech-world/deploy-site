const { existsSync } = require('fs');
const path = require('path');

const init = require('../lib/init/create');
const parseConfig = require('../lib/build/parseConfig');
const build = require('../lib/build');

const reactAppPath = path.join('__tests__', 'react-app');
const configFile = path.join(reactAppPath, 'deploy.json');

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
      { provider: 's3', env: 'staging, production', buildDir: 'build' },
      reactAppPath
    );
    expect(existsSync(configFile)).toBeTruthy();
    const config = await parseConfig(configFile);
    expect(config).toHaveProperty('s3');
    expect(config).toHaveProperty('s3.staging');
    expect(config).toHaveProperty('s3.production');
  });
});

describe('build app', () => {
  test('the empty params fails with an error', async () => {
    expect.assertions(1);
    await expect(build()).rejects.toThrow();
  });

  test('the invalid provider fails with an error', async () => {
    expect.assertions(1);
    await expect(build('unknown', '', reactAppPath)).rejects.toThrow(
      'No such provider(unknown) found'
    );
  });

  test('the invalid env fails with an error', async () => {
    expect.assertions(1);
    await expect(build('s3', 'test', reactAppPath)).rejects.toThrow(
      'No such environment(test) found'
    );
  });

  it('creates the react app staging build', async () => {
    const { code } = await build('s3', 'staging', reactAppPath);
    expect(existsSync(path.join(reactAppPath, 'build'))).toBeTruthy();
    expect(code).toBe(0);
  }, 10000);

  it('creates the react app production build', async () => {
    const { code } = await build('s3', 'production', reactAppPath);
    expect(existsSync(path.join(reactAppPath, 'build'))).toBeTruthy();
    expect(code).toBe(0);
  }, 10000);
});
