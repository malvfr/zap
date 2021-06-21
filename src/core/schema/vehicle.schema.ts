import buildSchema from './build';

export const VehicleSchema = buildSchema('Vehicle', ['vehicle', 'color', 'manufacturer', 'model', 'type', 'vin', 'fuel']);
