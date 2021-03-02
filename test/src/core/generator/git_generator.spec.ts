import gitGen from '../../../../src/core/generator/git_generator';

describe('Test git data generation', () => {
  test('Should return a string', async () => {
    let returnedValue = await gitGen({ type: 'branch' }, 'en_US');

    expect(typeof returnedValue).toBe('string');
    returnedValue = await gitGen({ type: 'commitEntry' }, 'en_US');
    expect(typeof returnedValue).toBe('string');

    returnedValue = await gitGen({ type: 'commitMessage' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await gitGen({ type: 'commitSha' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await gitGen({ type: 'shortSha' }, 'en_US');

    expect(typeof returnedValue).toBe('string');
  });

  test('Should throw an exception when type is invalid', async () => {
    await expect(gitGen('invalid' as any, 'en_US')).rejects.toThrow(Error('Invalid git option'));
  });
});
