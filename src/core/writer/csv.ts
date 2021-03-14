import { logData, logInfo } from '../../shared/log_formatter';
import { writeToFile } from './file_writer';

export const generateLine = (values: (string | number)[]): string => {
  return values.join(';');
};

export const writeCSV = async (schema: { tableData: string[][]; tableName: string; tableColumns: string[] }[]): Promise<void> => {
  for (const { tableName, tableColumns, tableData } of schema) {
    logInfo(`\n Outputting data: ${tableName} \n`);

    const fileName = `${tableName}.csv`;

    await writeHeaders(tableColumns, fileName);

    for (const data of tableData) {
      const line = generateLine(data);
      await writeToFile(line, fileName);
      logData(line);
    }
  }
};

const writeHeaders = async (tableColumns: string[], fileName: string): Promise<void> => {
  const data = tableColumns.reduce((prev, cur) => `${prev};` + cur);
  await writeToFile(data, fileName);
  logData(data);
};
