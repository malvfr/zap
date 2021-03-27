import { ZapSchemaEnum } from '../schema/enum.schema';

export default async ({ values }: ZapSchemaEnum): Promise<string> => {
  if (values.length === 0) {
    throw new Error('The enum length should be greater than 0');
  }

  return values[Math.floor(Math.random() * values.length)];
};
