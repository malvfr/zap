import Joi from 'joi';
import { buildCategorySchema } from './build';

const allowedValues = {
  sequentialInteger: Joi.object({
    start: Joi.number().required()
  }),
  uuid: Joi.string(),
  randomInteger: Joi.object({
    min: Joi.number().min(Joi.ref('max')).required(),
    max: Joi.number().required()
  })
};

export const IdSchema = buildCategorySchema(allowedValues, 'ID');
