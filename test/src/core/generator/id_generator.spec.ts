import idGen from '../../../../src/core/generator/id_generator';

describe('Test ID data generation', () => {
  test('Should return a string', async () => {
    const meta = {
      index: 0
    };

    let returnedValue = await idGen({ type: 'uuid' }, 'en_US', meta);

    expect(typeof returnedValue).toBe('string');

    returnedValue = await idGen({ type: 'randomInteger' }, 'en_US', meta);

    expect(typeof returnedValue).toBe('string');
  });

  test('Should return a sequential ID number', async () => {
    const meta = {
      index: 1
    };

    let returnedValue = await idGen({ type: 'uuid' }, 'en_US', meta);

    returnedValue = await idGen({ type: 'sequentialInteger' }, 'en_US', meta);

    expect(returnedValue).toBe('2');

    returnedValue = await idGen({ type: 'sequentialInteger', start: 100 }, 'en_US', meta);

    expect(returnedValue).toBe('101');
  });

  test('Should throw an exception when type is invalid', async () => {
    const meta = {
      index: 0
    };

    await expect(idGen('invalid' as any, 'en_US', meta)).rejects.toThrow(Error('Invalid ID option'));
  });
});
