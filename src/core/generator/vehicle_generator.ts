import { loadFakerModule } from '../../shared/module_loader';
import { ZapSchemaVehicle } from '../schema/zap.schema';

export default async (options: ZapSchemaVehicle, locale: string): Promise<string> => {
  const { vehicle } = await loadFakerModule(locale);

  switch (options) {
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
      throw new Error('Invalid vehicle option');
  }
};
