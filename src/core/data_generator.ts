import { ZapSchema, ZapSchemaCategories, ZapSchemaGit, ZapSchemaVehicle } from './schema/zap.schema';
import { generateSQL } from './sql';

export const start = (schema: ZapSchema, locale: string) => {
  const { tables } = schema;

  tables.forEach(async (table) => {
    const { quantity, name, fields } = table;

    for (let i = 1; i <= quantity; i++) {
      let tableColumns: string[] = [];
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

      console.log(
        generateSQL({
          table: name,
          columns: tableColumns,
          values: fieldsData
        })
      );
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
