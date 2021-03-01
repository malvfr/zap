export const generateCSV = ({ columns, values }: { columns: string[]; values: (string | number)[] }): string => {
  return values.join(';');
};
