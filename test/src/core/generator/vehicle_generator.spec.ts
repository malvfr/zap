import vehicleGen from '../../../../src/core/generator/vehicle_generator';

describe('Test vehicle data generation', () => {
  test('Should return a string', async () => {
    let returnedValue = await vehicleGen('vehicle', 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await vehicleGen('color', 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await vehicleGen('fuel', 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await vehicleGen('manufacturer', 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await vehicleGen('type', 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await vehicleGen('vin', 'en_US');

    expect(typeof returnedValue).toBe('string');

    returnedValue = await vehicleGen('model', 'en_US');

    expect(typeof returnedValue).toBe('string');
  });

  test('Should throw an exception when type is invalid', async () => {
    await expect(vehicleGen('invalid' as any, 'en_US')).rejects.toThrow(Error('Invalid vehicle option'));
  });
});
