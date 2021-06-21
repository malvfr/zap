import { loadFakerModule } from '../../shared/module_loader';
import { Vehicle } from '../interfaces';

export default async ({ type }: Vehicle, locale: string): Promise<string> => {
  const { vehicle } = await loadFakerModule(locale);

  switch (type) {
    case 'vehicle':
      return vehicle.vehicle();
    case 'manufacturer':
      return vehicle.manufacturer();
    case 'model':
      return vehicle.model();
    case 'type':
      return vehicle.type();
    case 'fuel':
      return vehicle.fuel();
    case 'vin':
      return vehicle.vin();
    case 'color':
      return vehicle.color();
    default:
      throw new Error(`Invalid vehicle ${type} option`);
  }
};
