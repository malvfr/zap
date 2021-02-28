import {
  ZapSchema,
  ZapSchemaCategories,
  ZapSchemaGit,
  ZapSchemaID,
  ZapSchemaMetadata,
  ZapSchemaTable,
  ZapSchemaVehicle
} from './schema/zap.schema';
import { writeToFile } from './writer/file_writer';
import { generateSQL } from './writer/sql';

export const start = async (schema: ZapSchema, locale: string): Promise<void> => {
  const { tables } = schema;

  await iterateOverTables(tables, locale);
};

const iterateOverTables = async (tables: ZapSchemaTable[], locale: string) => {
  const result = await Promise.all(
    tables.map(async (table) => {
      const { quantity, name: tableName, fields } = table;

      let fieldsData: string[][] = [];
      const tableColumns: string[] = [];

      for (let index = 0; index < quantity; index++) {
        fieldsData.push(
          await Promise.all(
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
          )
        );
      }

      return {
        tableData: fieldsData,
        tableName,
        tableColumns: tableColumns.filter((value, index, self) => self.indexOf(value) === index) //TODO: Fix this way of filtering unique columns
      };
    })
  );

  await outputData(result);
};

const outputData = async (schema: { tableData: string[][]; tableName: string; tableColumns: string[] }[]) => {
  schema.forEach(async ({ tableName, tableColumns, tableData }) => {
    tableData.forEach(async (data) => await writeData(tableName, tableColumns, data));
  });
};

const writeData = async (table: string, columns: string[], values: string[]) => {
  const mock = generateSQL({
    table,
    columns,
    values
  });

  await writeToFile(mock, table);
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
