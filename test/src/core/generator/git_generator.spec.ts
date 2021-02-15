import gitGen from '../../../../src/core/generator/git_generator';

describe('Test git data generation', () => {
  test('Should return a string', async () => {
    let returnedValue = await gitGen('branch', 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await gitGen('commitEntry', 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await gitGen('commitMessage', 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await gitGen('commitSha', 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await gitGen('shortSha', 'en_US');

    expect(typeof returnedValue).toBe('string');
  });

  test('Should throw an exception when type is invalid', async () => {
    await expect(gitGen('invalid' as any, 'en_US')).rejects.toThrow(Error('Invalid git option'));
  });
});
