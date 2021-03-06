import { loadFakerModule } from '../../shared/module_loader';
import { ZapSchemaAddress } from '../schema/address.schema';

export default async ({ type, abbr }: ZapSchemaAddress, locale: string): Promise<string> => {
  const { address } = await loadFakerModule(locale);

  switch (type) {
    case 'city':
      return address.city();
    case 'streetName':
      return address.streetName();
    case 'streetAddress':
      return address.streetAddress();
    case 'country':
      return address.country();
    case 'countryCode':
      return address.countryCode();
    case 'state':
      return address.state(abbr);
    case 'zipCode':
      return address.zipCode();
    default:
      throw new Error(`Invalid Address ${type} option`);
  }
};
