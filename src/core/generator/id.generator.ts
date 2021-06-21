import { loadFakerModule } from '../../shared/module_loader';
import { ID } from '../interfaces';
import { ZapSchemaMetadata } from '../schema/zap.schema';

export default async (data: ID, locale: string, meta: ZapSchemaMetadata): Promise<string> => {
  const { datatype } = await loadFakerModule(locale);

  const option = Object.keys(data)[0] as keyof ID;

  switch (option) {
    case 'uuid':
      return datatype.uuid();
    case 'randomInteger': {
      const min = data.randomInteger?.min;
      const max = data.randomInteger?.max;
      return datatype.number({ min, max }).toString();
    }
    case 'sequentialInteger': {
      const start = data.sequentialInteger?.start ?? 1;

      return (start + meta.index).toString();
    }
    default:
      throw new Error(`Invalid ID ${option} option`);
  }
};
