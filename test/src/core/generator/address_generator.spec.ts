import addGen from '../../../../src/core/generator/address_generator';

describe('Test address data generation', () => {
  test('Should return a string', async () => {
    let returnedValue = await addGen({ type: 'city' }, 'en_US');

    expect(typeof returnedValue).toBe('string');
    returnedValue = await addGen({ type: 'country' }, 'en_US');
    expect(typeof returnedValue).toBe('string');

    returnedValue = await addGen({ type: 'countryCode' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await addGen({ type: 'state' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await addGen({ type: 'streetAddress' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await addGen({ type: 'streetName' }, 'en_US');

    expect(typeof returnedValue).toBe('string');
    returnedValue = await addGen({ type: 'zipCode' }, 'en_US');

    expect(typeof returnedValue).toBe('string');
  });

  test('Should throw an exception when type is invalid', async () => {
    await expect(addGen({ type: 'foo' } as any, 'en_US')).rejects.toThrow(Error('Invalid Address foo option'));
  });
});
