import { loadFakerModule } from '../../shared/module_loader';
import { Random } from '../interfaces/random';

export default async ({ type, length, max, min, precision }: Random, locale: string): Promise<string> => {
  const { random, datatype } = await loadFakerModule(locale);
  switch (type) {
    case 'float':
      return datatype.float({ min, max }).toPrecision(precision).toString();
    case 'integer':
      return datatype.number({ min, max }).toString();
    case 'hexaDecimal':
      return datatype.hexaDecimal().toString();
    case 'image':
      return random.image();
    case 'boolean':
      return datatype.boolean().toString();
    case 'word':
      return random.word();
    case 'words':
      return random.words();
    case 'string':
      return randomString(Number(length) || 20);
    default:
      throw new Error(`Invalid Random ${type} option`);
  }
};

const randomString = (length: number): string => {
  let res = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789;/!@#$%¨&*()-+[]~^?.,|\\/*';
  const charactersLength = chars.length;

  for (let i = 0; i < length; i++) {
    res += chars.charAt(Math.floor(Math.random() * charactersLength));
  }
  return res;
};
