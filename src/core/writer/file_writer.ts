import { appendFile } from 'fs/promises';

export const writeToFile = async (data: string, filename: string) => {
  await appendFile(filename, data + '\n', 'utf-8');
};
