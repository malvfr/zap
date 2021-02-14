import { ZapSchema, ZapSchemaCategories } from './schema/zap.schema';

export const start = (schema: ZapSchema, locale: string, bulk?: boolean) => {
  const { tables } = schema;

  tables.forEach((table) => {
    const { quantity, name, fields } = table;

    for (let i = 1; i <= quantity; i++) {
      fields.forEach(async (column) => {
        const { name: columnName, category } = column;

        const categoryKey = Object.keys(
          category
        )[0] as keyof ZapSchemaCategories;

        const categoryValue = category[categoryKey];

        try {
          const mockGenerator = await getGeneratorInstance(categoryKey);
          console.log(await mockGenerator(categoryValue, locale));
        } catch (err) {
          console.error(err.message);
          process.exit(1);
        }
      });
    }
  });
};

const getGeneratorInstance = async (type: keyof ZapSchemaCategories) => {
  switch (type) {
    case 'vehicle':
      return (await import('./generator/vehicle_generator')).default;
    case 'git':
      return (await import('./generator/git_generator')).default;
    default:
      throw new Error(`The data type "${type}" is not supported`);
  }
};
