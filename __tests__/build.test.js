const { existsSync } = require('fs');
const path = require('path');
const { remove } = require('fs-extra');

const init = require('../lib/init/create');
const build = require('../lib/build');

const reactAppPath = path.join('__tests__', 'react-app');
const configFile = path.join(reactAppPath, 'deploy.json');

async function cleanUp() {
  await remove(path.join(reactAppPath, 'build'));
  await remove(configFile);
}

beforeAll(() => {
  return cleanUp();
});

describe('build app', () => {
  test('the empty params fails with an error', async () => {
    expect.assertions(1);
    await expect(build()).rejects.toThrow();
  });

  test('the invalid provider fails with an error', async () => {
    expect.assertions(1);
    await init(
      { provider: 's3', env: 'staging, production', buildDir: 'build' },
      reactAppPath
    );
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
    const { childProcess } = await build('s3', 'staging', reactAppPath);
    expect(existsSync(path.join(reactAppPath, 'build'))).toBeTruthy();
    expect(childProcess.code).toBe(0);
  }, 10000);
});
