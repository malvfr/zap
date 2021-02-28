import { appendFile } from 'fs/promises';

export const writeToFile = async (data: string, tableName: string) => {
  await appendFile(`${tableName}.sql`, data + '\n', 'utf-8');
};
