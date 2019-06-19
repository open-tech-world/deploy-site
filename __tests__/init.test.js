const { existsSync } = require('fs');
const path = require('path');
const { remove } = require('fs-extra');

const init = require('../lib/init/create');
const parseConfig = require('../lib/build/parseConfig');

const reactAppPath = path.join('__tests__', 'react-app');
const configFile = path.join(reactAppPath, 'deploy.json');

async function cleanUp() {
  await remove(path.join(reactAppPath, 'build'));
  await remove(configFile);
}

beforeAll(() => {
  return cleanUp();
});

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
      { provider: 's3', env: ['staging', 'production'], buildDir: 'build' },
      reactAppPath
    );
    expect(existsSync(configFile)).toBeTruthy();
    const config = await parseConfig(configFile);
    expect(config).toHaveProperty('s3');
    expect(config).toHaveProperty('s3.staging');
    expect(config).toHaveProperty('s3.production');
  });
});
