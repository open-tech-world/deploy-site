const { existsSync } = require('fs');

const create = require('../lib/init/create');

describe('create deploy.json file', () => {
  test('the empty params fails with an error', async () => {
    expect.assertions(1);
    await expect(create({})).rejects.toThrow();
  });

  test('the invalid params fails with an error', async () => {
    expect.assertions(1);
    await expect(create({ provider: 'unknown' })).rejects.toThrow();
  });

  it('creates a s3 config file', async () => {
    await create({ provider: 's3' });
    expect(existsSync).toBeTruthy();
  });
});
