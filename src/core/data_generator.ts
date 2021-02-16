import { ZapSchema, ZapSchemaCategories, ZapSchemaGit, ZapSchemaVehicle } from './schema/zap.schema';
import { generateSQL } from './sql';
import { appendFile } from 'fs/promises';

export const start = (schema: ZapSchema, locale: string): void => {
  const { tables } = schema;

  tables.forEach(async (table) => {
    const { quantity, name: tableName, fields } = table;

    for (let i = 1; i <= quantity; i++) {
      const tableColumns: string[] = [];
      const fieldsData = await Promise.all(
        fields.map(async (column) => {
          const { name: columnName, category } = column;

          tableColumns.push(columnName);

          const categoryKey = Object.keys(category)[0] as keyof ZapSchemaCategories;

          const categoryValue = category[categoryKey];

          //console.log('ColumnName', columnName);
          //console.log('CategoryKey', categoryKey);
          //console.log('CategoryValue', categoryValue);

          try {
            const info = await generateValue(categoryKey, categoryValue, locale);
            //console.log('Generated value', info);
            return info;
          } catch (err) {
            console.error(err.message);
            process.exit(1);
          }
        })
      );

      //console.log('table name', name);
      // console.log('table data', fieldsData);

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
  await appendFile(`${tableName}.txt`, data + '\n', 'utf-8');
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
