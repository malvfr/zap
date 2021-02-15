export const generateSQL = ({ table, columns, values }: { table: string; columns: string[]; values: (string | number)[] }) => {
  table = table.toUpperCase();
  const parsedColumns = parseColumns(columns);

  return `${generateCommand(table, parsedColumns)} VALUES (${parseValues(values)})`;
};

const parseColumns = (columns: string[]) => {
  return `(${columns.reduce((prev, cur) => `${prev},` + cur)})`;
};

const parseValues = (values: (string | number)[]) => {
  return "'" + values.join("','") + "'";
};

const generateCommand = (table: string, parsedColumns: string) => {
  return `INSERT INTO ${table} ${parsedColumns}`;
};
