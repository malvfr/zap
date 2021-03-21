import enumGen from '../../../../src/core/generator/enum_generator';

describe('Test Enum data generation', () => {
  test('Should return a string available in the array', async () => {
    const values = ['bob', 'ana', 'tyrone'];

    const returnedValue = await enumGen({ values });

    expect(typeof returnedValue).toBe('string');
  });

  test('Should thrown an error when array size is 0', async () => {
    const values: string[] = [];

    expect(async () => await enumGen({ values })).rejects.toThrow('The enum length should be greater than 0');
  });
});
