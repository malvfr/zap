import { parseFile } from '../../../src/core/parser';

describe('Test the conversion between yaml string and json', () => {
  test('Should return a string', () => {
    const fileAsString = `tables:
    - name: "CARROS"
      quantity: 2
      fields:
        - name: "PORTFOLIO_ID"
          category:
            ID:
              type: sequentialInteger
              start: 1000
        - name: "modelo"
          category:
            vehicle:
              type: vehicle
        - name: "cor"
          category:
            vehicle:
              type: color
    - name: "CARROS_VELHOS"
      quantity: 2
      fields:
        - name: "PORTFOLIO_ID"
          category:
            ID:
              type: uuid
        - name: "nome_velho"
          category:
            vehicle:
              type: vehicle
        - name: "combustivel_velho"
          category:
            vehicle:
              type: fuel
        - name: "carro"
          category:
            vehicle:
              type: manufacturer`;

    const jsonData = {
      tables: [
        {
          name: 'CARROS',
          quantity: 2,
          fields: [
            { name: 'PORTFOLIO_ID', category: { ID: { type: 'sequentialInteger', start: 1000 } } },
            { name: 'modelo', category: { vehicle: { type: 'vehicle' } } },
            { name: 'cor', category: { vehicle: { type: 'color' } } }
          ]
        },
        {
          name: 'CARROS_VELHOS',
          quantity: 2,
          fields: [
            { name: 'PORTFOLIO_ID', category: { ID: { type: 'uuid' } } },
            { name: 'nome_velho', category: { vehicle: { type: 'vehicle' } } },
            { name: 'combustivel_velho', category: { vehicle: { type: 'fuel' } } },
            { name: 'carro', category: { vehicle: { type: 'manufacturer' } } }
          ]
        }
      ]
    };

    expect(parseFile(fileAsString)).toStrictEqual(jsonData);
  });

  test('Should throw an exception when file is invalid', () => {
    const fileAsString = `tables:
    - name: "CARROS"
quantity: 2 #fails here
      fields:
        #- name: "PORTFOLIO_ID"
        #category:
        # integer:
        #start: 500
        - name: "modelo"
          category:
            vehicle: vehicle
        - name: "cor"
          category:
            vehicle: color
`;

    expect(() => parseFile(fileAsString)).toThrow();
  });
});
