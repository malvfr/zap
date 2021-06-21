import vehicleGen from '../../../../src/core/generator/vehicle.generator';

describe('Test vehicle data generation', () => {
  test('Should return a string', async () => {
    let returnedValue = await vehicleGen({ type: 'vehicle' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await vehicleGen({ type: 'color' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await vehicleGen({ type: 'fuel' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await vehicleGen({ type: 'manufacturer' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await vehicleGen({ type: 'type' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await vehicleGen({ type: 'vin' }, 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await vehicleGen({ type: 'model' }, 'en_US');

    expect(typeof returnedValue).toBe('string');
  });

  test('Should throw an exception when type is invalid', async () => {
    await expect(vehicleGen({ type: 'foo' } as any, 'en_US')).rejects.toThrow(Error('Invalid vehicle foo option'));
  });
});
