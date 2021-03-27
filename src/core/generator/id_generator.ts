import { loadFakerModule } from '../../shared/module_loader';
import { ZapSchemaID } from '../schema/id.schema';
import { ZapSchemaMetadata } from '../schema/zap.schema';

export default async ({ type, start, max, min }: ZapSchemaID, locale: string, meta: ZapSchemaMetadata): Promise<string> => {
  const { random } = await loadFakerModule(locale);

  switch (type) {
    case 'uuid':
      return random.uuid();
    case 'randomInteger':
      return random.number({ min, max }).toString();
    case 'sequentialInteger':
      start = start ?? 1;

      return (start + meta.index).toString();
    default:
      throw new Error(`Invalid ID ${type} option`);
  }
};
