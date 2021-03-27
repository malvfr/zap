import { loadFakerModule } from '../../shared/module_loader';
import { ZapSchemaRandom } from '../schema/random.schema';

export default async ({ type, length, max, min, precision }: ZapSchemaRandom, locale: string): Promise<string> => {
  const { random } = await loadFakerModule(locale);
  switch (type) {
    case 'float':
      return random.float({ min, max }).toPrecision(precision).toString();
    case 'integer':
      return random.number({ min, max }).toString();
    case 'hexaDecimal':
      return random.hexaDecimal().toString();
    case 'image':
      return random.image();
    case 'boolean':
      return random.boolean().toString();
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
