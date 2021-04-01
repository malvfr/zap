import { loadFakerModule } from '../../shared/module_loader';
import { ZapSchemaID } from '../schema/id.schema';
import { ZapSchemaMetadata } from '../schema/zap.schema';

export default async ({ type, start, max, min }: ZapSchemaID, locale: string, meta: ZapSchemaMetadata): Promise<string> => {
  const { datatype } = await loadFakerModule(locale);

  switch (type) {
    case 'uuid':
      return datatype.uuid();
    case 'randomInteger':
      return datatype.number({ min, max }).toString();
    case 'sequentialInteger':
      start = start ?? 1;

      return (start + meta.index).toString();
    default:
      throw new Error(`Invalid ID ${type} option`);
  }
};
