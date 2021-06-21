import { Zap } from './interfaces';
import { writeCSV } from './writer/csv';
import { writeSQL } from './writer/sql';
import { createWriteStream, WriteStream } from 'fs';
export const start = async ({ tables }: Zap, locale: string, csv = false): Promise<void> => {
  tables.forEach(({ name: tableName, quantity, fields }) => {
    const stream = getOutputStream(tableName, csv);

    for (let index = 0; index < quantity; index++) {
      fields.map((field) => {
        void 0;
      });
    }
  });
};

const getOutputStream = (tableName: string, csv = false): WriteStream => {
  let file;

  if (csv) {
    file = `${tableName}.csv`;
  } else {
    file = `${tableName}.sql`;
  }

  return createWriteStream(file);
};
