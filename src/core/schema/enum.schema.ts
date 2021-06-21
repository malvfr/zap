import Joi from 'joi';

export const EnumSchema = Joi.object({ values: Joi.array().items(Joi.string(), Joi.number()).min(1).required() }).label('Enum');
