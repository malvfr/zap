import Joi from 'joi';
import buildSchema from './build';

export const PersonSchema = buildSchema(
  'Person',
  ['firstName', 'lastName', 'middleName', 'jobTitle', 'prefix', 'suffix', 'title', 'jobDescriptor', 'jobArea', 'jobType'],
  {
    gender: Joi.string().valid('M', 'F').default('M')
  }
);
