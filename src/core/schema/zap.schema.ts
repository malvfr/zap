import Joi from 'joi';
import { AddressSchema } from './address.schema';
import { DateSchema } from './date.schema';
import { EnumSchema } from './enum.schema';
import { GitSchema } from './git.schema';
import { IdSchema } from './id.schema';
import { PersonSchema } from './person.schema';
import { RandomSchema } from './random.schema';
import { VehicleSchema } from './vehicle.schema';

export type ZapSchemaMetadata = {
  index: number;
};

const allowedCategories = {
  git: GitSchema,
  vehicle: VehicleSchema,
  ID: IdSchema,
  date: DateSchema,
  person: PersonSchema,
  enum: EnumSchema,
  random: RandomSchema,
  address: AddressSchema
};

const categories = Joi.object(allowedCategories).xor(...Object.keys(allowedCategories));

const fields = Joi.object({
  name: Joi.string().required(),
  category: categories.required()
});

const tables = Joi.object({
  name: Joi.string().required(),
  quantity: Joi.number().required(),
  fields: Joi.array().items(fields).required()
});

export const ZapSchema = Joi.object({
  tables: Joi.array().items(tables).required()
})
  .label('Zap')
  .required();
