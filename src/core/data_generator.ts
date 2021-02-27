import {
  ZapSchema,
  ZapSchemaCategories,
  ZapSchemaGit,
  ZapSchemaID,
  ZapSchemaMetadata,
  ZapSchemaVehicle
} from './schema/zap.schema';
import { generateSQL } from './writer/sql';
import { appendFile } from 'fs/promises';

export const start = (schema: ZapSchema, locale: string): void => {
  const { tables } = schema;

  tables.forEach(async (table) => {
    const { quantity, name: tableName, fields } = table;

    for (let index = 0; index < quantity; index++) {
      const tableColumns: string[] = [];
      const fieldsData = await Promise.all(
        fields.map(async (column) => {
          const { name: columnName, category } = column;

          tableColumns.push(columnName);

          const categoryKey = Object.keys(category)[0] as keyof ZapSchemaCategories;

          let categoryOptions = category[categoryKey];

          const meta = {
            index,
            categoryOptions
          };

          try {
            return generateValue(categoryKey, categoryOptions, locale, meta);
          } catch (err) {
            console.error(err.message);
            process.exit(1);
          }
        })
      );

      const mock = generateSQL({
        table: tableName,
        columns: tableColumns,
        values: fieldsData
      });

      await writeToFile(mock, tableName);
    }
  });
};

const writeToFile = async (data: string, tableName: string) => {
  await appendFile(`${tableName}.sql`, data + '\n', 'utf-8');
};

const generateValue = async (
  category: keyof ZapSchemaCategories,
  categoryValue: ZapSchemaCategories[keyof ZapSchemaCategories],
  locale: string,
  meta: ZapSchemaMetadata
) => {
  switch (category) {
    case 'vehicle':
      return (await import('./generator/vehicle_generator')).default(categoryValue as ZapSchemaVehicle, locale);
    case 'git':
      return (await import('./generator/git_generator')).default(categoryValue as ZapSchemaGit, locale);
    case 'ID':
      return (await import('./generator/id_generator')).default(categoryValue as ZapSchemaID, locale, meta);
    default:
      throw new Error(`The data type "${category}" is not supported`);
  }
};
