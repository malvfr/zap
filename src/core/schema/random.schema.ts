import Joi from 'joi';
import buildSchema from './build';

export const RandomSchema = buildSchema(
  'Random',
  ['string', 'integer', 'boolean', 'float', 'hexaDecimal', 'word', 'words', 'image'],
  {
    start: Joi.number().min(0),
    min: Joi.number().less(Joi.ref('max')),
    max: Joi.number(),
    length: Joi.number().min(1),
    precision: Joi.number().min(1)
  }
);
