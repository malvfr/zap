import personGen from '../../../../src/core/generator/person.generator';

describe('Test person data generation', () => {
  test('Should return a string', async () => {
    let returnedValue = await personGen({ type: 'firstName', gender: 'M' }, 'en_US');

    expect(typeof returnedValue).toBe('string');
    returnedValue = await personGen({ type: 'jobArea', gender: 'M' }, 'en_US');
    expect(typeof returnedValue).toBe('string');

    returnedValue = await personGen({ type: 'jobDescriptor', gender: 'M' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await personGen({ type: 'jobTitle' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await personGen({ type: 'jobType' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await personGen({ type: 'lastName', gender: 'F' }, 'en_US');

    expect(typeof returnedValue).toBe('string');
    returnedValue = await personGen({ type: 'middleName' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await personGen({ type: 'prefix' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await personGen({ type: 'suffix' }, 'en_US');

    expect(typeof returnedValue).toBe('string');
    returnedValue = await personGen({ type: 'title' }, 'en_US');

    expect(typeof returnedValue).toBe('string');
  });

  test('Should throw an exception when type is invalid', async () => {
    await expect(personGen({ type: 'foo' } as any, 'en_US')).rejects.toThrow(Error('Invalid person foo option'));
  });
});
