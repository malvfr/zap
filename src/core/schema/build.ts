import Joi, { ObjectSchema, SchemaMap } from 'joi';

export default (label: string, fields: string[], extra = {}): ObjectSchema => {
  return Joi.object({
    type: Joi.string()
      .valid(...fields)
      .required(),
    ...extra
  }).label(label);
};

export const buildCategorySchema = (allowedValues: SchemaMap, label: string): ObjectSchema => {
  return Joi.object(allowedValues)
    .xor(...Object.keys(allowedValues))
    .label(label);
};
