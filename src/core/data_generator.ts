import {
  ZapSchema,
  ZapSchemaCategories,
  ZapSchemaGit,
  ZapSchemaID,
  ZapSchemaMetadata,
  ZapSchemaPerson,
  ZapSchemaTable,
  ZapSchemaVehicle
} from './schema/zap.schema';
import { writeCSV } from './writer/csv';
import { writeSQL } from './writer/sql';

export const start = async (schema: ZapSchema, locale: string, csv = false): Promise<void> => {
  const { tables } = schema;

  await iterateOverTables(tables, locale, csv);
};

const iterateOverTables = async (tables: ZapSchemaTable[], locale: string, csv = false) => {
  const result = await Promise.all(
    tables.map(async (table) => {
      const { quantity, name: tableName, fields } = table;

      const fieldsData: string[][] = [];
      const tableColumns: string[] = [];

      for (let index = 0; index < quantity; index++) {
        fieldsData.push(
          await Promise.all(
            fields.map(async (column) => {
              const { name: columnName, category } = column;

              tableColumns.push(columnName);

              const categoryKey = Object.keys(category)[0] as keyof ZapSchemaCategories;

              const categoryOptions = category[categoryKey];

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

  await outputData(result, csv);
};

const outputData = async (schema: { tableData: string[][]; tableName: string; tableColumns: string[] }[], csv = false) => {
  if (csv) {
    await writeCSV(schema);
  } else {
    await writeSQL(schema);
  }
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
    case 'person':
      return (await import('./generator/person_generator')).default(categoryValue as ZapSchemaPerson, locale);
    default:
      throw new Error(`The data type "${category}" is not supported`);
  }
};
