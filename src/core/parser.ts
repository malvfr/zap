import { load } from 'js-yaml';
import { ZapSchema } from './schema/zap.schema';

export const parseFile = (fileAsString: string): ZapSchema => {
  const data = load(fileAsString);

  return data as ZapSchema;
};
