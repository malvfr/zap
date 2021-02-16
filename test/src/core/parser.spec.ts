import { parseFile } from '../../../src/core/parser';

describe('Test the conversion between yaml string and json', () => {
  test('Should return a string', () => {
    const fileAsString = `tables:
    - name: "CARROS"
      quantity: 2
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
    - name: "CARROS_VELHOS"
      quantity: 1
      fields:
        - name: "nome_velho"
          category:
            vehicle: vehicle
        - name: "combustivel_velho"
          category:
            vehicle: fuel
        - name: "carro"
          category:
            vehicle: manufacturer`;

    const jsonData = {
      tables: [
        {
          name: 'CARROS',
          quantity: 2,
          fields: [
            { name: 'modelo', category: { vehicle: 'vehicle' } },
            { name: 'cor', category: { vehicle: 'color' } }
          ]
        },
        {
          name: 'CARROS_VELHOS',
          quantity: 1,
          fields: [
            { name: 'nome_velho', category: { vehicle: 'vehicle' } },
            { name: 'combustivel_velho', category: { vehicle: 'fuel' } },
            { name: 'carro', category: { vehicle: 'manufacturer' } }
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
