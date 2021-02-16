import { loadFakerModule } from '../../../src/shared/module_loader';

describe('Test the Faker modules dynamic loading', () => {
  test('should return the correct faker module', async () => {
    expect(await loadFakerModule('en_US')).not.toBeNull();
  });

  test('should throw an error when the locale does not exist', async () => {
    await expect(loadFakerModule('invalid_locale')).rejects.toThrow();
  });
});
