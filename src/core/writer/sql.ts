import { logData, logInfo } from '../../shared/log_formatter';
import { writeToFile } from './file_writer';

export const generateSQLCommand = ({
  tableName,
  tableColumns,
  values
}: {
  tableName: string;
  tableColumns: string[];
  values: (string | number)[];
}): string => {
  tableName = tableName.toUpperCase();
  const parsedColumns = parseColumns(tableColumns);

  return `${generateCommand(tableName, parsedColumns)} VALUES (${parseValues(values)});`;
};

const parseColumns = (columns: string[]) => {
  return `(${columns.reduce((prev, cur) => `${prev},${cur}`)})`;
};

const parseValues = (values: (string | number)[]) => {
  return "'" + values.join("','") + "'";
};

const generateCommand = (table: string, parsedColumns: string) => {
  return `INSERT INTO ${table} ${parsedColumns}`;
};

export const writeSQL = async (schema: { tableData: string[][]; tableName: string; tableColumns: string[] }[]): Promise<void> => {
  for (const { tableName, tableColumns, tableData } of schema) {
    logInfo(`\n Outputting data: ${tableName} \n`);

    for (const data of tableData) {
      await writeData(tableName, tableColumns, data);
    }
  }
};

const writeData = async (tableName: string, tableColumns: string[], values: (string | number)[]): Promise<void> => {
  const command = generateSQLCommand({
    tableName,
    tableColumns,
    values
  });

  const fileName = `${tableName}.sql`;

  logData(command);

  await writeToFile(command, fileName);
};
