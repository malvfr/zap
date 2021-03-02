import { generateLine, writeCSV } from '../../../../src/core/writer/csv';

describe('Test CSV line generation', () => {
  test('Should return the correct CSV line', () => {
    const args = ['Corsa', 2000];
    const returnedValue = 'Corsa;2000';

    expect(generateLine(args)).toBe(returnedValue);
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

    expect(async () => await writeCSV(args)).not.toThrow();
  });
});
