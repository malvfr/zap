import Joi from 'joi';
import buildSchema from './build';

export const AddressSchema = buildSchema(
  'Address',
  ['city', 'state', 'country', 'streetName', 'streetAddress', 'countryCode', 'zipCode'],
  {
    abbr: Joi.boolean()
  }
);
