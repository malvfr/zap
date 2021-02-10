export const generateSQL = (
  {
    table,
    columns,
    values
  }: { table: string; columns: [string]; values: [string] },
  bulk?: boolean
) => {
  table = table.toUpperCase();
  const parsedColumns = parseColumns(columns);

  if (bulk) {
    return `${generateCommand(table, parsedColumns)} ${generateBulk(values)}`;
  }

  return `${generateCommand(table, parsedColumns)} VALUES ${values}`;
};

const generateBulk = (values: [string]) => {
  return `VALUES (${values.reduce((prev, cur) => `${prev},` + cur)})`;
};

const parseColumns = (columns: [string]) => {
  return `(${columns.reduce((prev, cur) => `${prev},` + cur)})`;
};

const generateCommand = (table: string, parsedColumns: string) => {
  return `INSERT INTO ${table} ${parsedColumns}`;
};
