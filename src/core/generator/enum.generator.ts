import { Enum } from '../interfaces/enum';

export default async ({ values }: Enum): Promise<string> => {
  return values[Math.floor(Math.random() * values.length)];
};
