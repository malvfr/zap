import { generateCSV } from '../../../../src/core/writer/csv';

describe('Test CSV line generation', () => {
  test('Should return the correct CSV line', () => {
    const args = {
      columns: ['Vehicle', 'Year'],
      values: ['Corsa', 2000]
    };

    const returnedValue = 'Corsa;2000';

    expect(generateCSV(args)).toBe(returnedValue);
  });
});
