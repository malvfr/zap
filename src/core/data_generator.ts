import { ZapSchema, ZapSchemaCategories, ZapSchemaGit, ZapSchemaVehicle } from './schema/zap.schema';

export const start = (schema: ZapSchema, locale: string) => {
  const { tables } = schema;

  tables.forEach((table) => {
    const { quantity, name, fields } = table;

    for (let i = 1; i <= quantity; i++) {
      fields.forEach(async (column) => {
        const { name: columnName, category } = column;

        const categoryKey = Object.keys(category)[0] as keyof ZapSchemaCategories;

        const categoryValue = category[categoryKey];

        try {
          const result = await generateValue(categoryKey, categoryValue, locale);

          console.log(result);
        } catch (err) {
          console.error(err.message);
          process.exit(1);
        }
      });
    }
  });
};

const generateValue = async (category: keyof ZapSchemaCategories, categoryValue: string, locale: string) => {
  switch (category) {
    case 'vehicle':
      return (await import('./generator/vehicle_generator')).default(categoryValue as ZapSchemaVehicle, locale);
    case 'git':
      return (await import('./generator/git_generator')).default(categoryValue as ZapSchemaGit, locale);
    default:
      throw new Error(`The data type "${category}" is not supported`);
  }
};
