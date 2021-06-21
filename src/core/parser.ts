import { load } from 'js-yaml';
import { Zap } from './interfaces/zap';
import { ZapSchema } from './schema/zap.schema';

export const parseFile = (fileAsString: string): Zap => {
  const data = load(fileAsString);

  console.log(ZapSchema.validate(data));

  return data as Zap;
};
