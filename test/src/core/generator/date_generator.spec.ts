import dateGen from '../../../../src/core/generator/date_generator';

describe('Test DATE data generation', () => {
  test('Should return a string', async () => {
    let returnedValue = await dateGen({ type: 'past' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await dateGen({ type: 'between', start: '2020-01-01', end: '2030-01-01' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await dateGen({ type: 'future' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await dateGen({ type: 'weekday' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await dateGen({ type: 'month' }, 'en_US');

    expect(typeof returnedValue).toBe('string');
  });

  test('Should throw an exception when type is invalid', async () => {
    await expect(dateGen({ type: 'foo' } as any, 'en_US')).rejects.toThrow(Error('Invalid Date foo option'));
  });
});
