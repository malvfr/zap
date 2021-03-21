import { generateSQLCommand, writeSQL } from '../../../../src/core/writer/sql';

jest.mock('../../../../src/shared/log_formatter');

describe('Test SQL command generation', () => {
  test('Should return the correct SQL command', () => {
    const args = {
      tableName: 'table_name',
      tableColumns: ['Vehicle', 'Year'],
      values: ['Corsa', 2000]
    };

    const returnedValue = "INSERT INTO TABLE_NAME (Vehicle,Year) VALUES ('Corsa','2000');";

    expect(generateSQLCommand(args)).toBe(returnedValue);
  });

  test('Should throw no errors', async () => {
    const args = [
      {
        tableData: [
          ['1000', 'Ford XTS', 'violeta'],
          ['1001', 'Hyundai Expedition', 'vermelho']
        ],
        tableName: 'CARROS',
        tableColumns: ['PORTFOLIO_ID', 'modelo', 'cor']
      },
      {
        tableData: [['1e151e07-95ad-4e15-b906-e3d46571df52', 'Volkswagen Grand Caravan', 'Electric', 'Toyota']],
        tableName: 'CARROS_VELHOS',
        tableColumns: ['PORTFOLIO_ID', 'nome_velho', 'combustivel_velho', 'carro']
      }
    ];

    expect(async () => await writeSQL(args)).not.toThrow();
  });
});
