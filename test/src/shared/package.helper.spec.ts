import { getVersion } from '../../../src/shared/package.helper';

beforeEach(() => {
  jest.resetModules();
});

describe('Test package.json parsing', () => {
  test('should return the correct "version" entry of json file', () => {
    jest.mock('../../../package.json', () => {
      return jest.fn(() => ({
        version: '1.0.0'
      }));
    });

    expect(getVersion()).toBe('1.0.0');
  });
});
