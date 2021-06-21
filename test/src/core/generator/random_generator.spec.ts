import randomGen from '../../../../src/core/generator/random.generator';

describe('Test random data generation', () => {
  test('Should return a string', async () => {
    let returnedValue = await randomGen({ type: 'boolean' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await randomGen({ type: 'float' }, 'en_US');
    expect(typeof returnedValue).toBe('string');

    returnedValue = await randomGen({ type: 'hexaDecimal' }, 'en_US');
    expect(typeof returnedValue).toBe('string');

    returnedValue = await randomGen({ type: 'image' }, 'en_US');
    expect(typeof returnedValue).toBe('string');

    returnedValue = await randomGen({ type: 'integer' }, 'en_US');
    expect(typeof returnedValue).toBe('string');

    returnedValue = await randomGen({ type: 'string' }, 'en_US');
    expect(typeof returnedValue).toBe('string');

    returnedValue = await randomGen({ type: 'string', length: 10 }, 'en_US');
    expect(typeof returnedValue).toBe('string');
    expect(returnedValue.length).toBe(10);

    returnedValue = await randomGen({ type: 'word' }, 'en_US');
    expect(typeof returnedValue).toBe('string');

    returnedValue = await randomGen({ type: 'words' }, 'en_US');
    expect(typeof returnedValue).toBe('string');
  });

  test('Should throw an exception when type is invalid', async () => {
    await expect(randomGen({ type: 'foo' } as any, 'en_US')).rejects.toThrow(Error('Invalid Random foo option'));
  });
});
