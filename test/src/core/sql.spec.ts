import { generateSQL } from '../../../src/core/sql';

describe('Test SQL command generation', () => {
  test('Should return the correct SQL command', () => {
    const args = {
      table: 'table_name',
      columns: ['Vehicle', 'Year'],
      values: ['Corsa', 2000]
    };

    const returnedValue = "INSERT INTO TABLE_NAME (Vehicle,Year) VALUES ('Corsa','2000')";

    expect(generateSQL(args)).toBe(returnedValue);
  });
});
