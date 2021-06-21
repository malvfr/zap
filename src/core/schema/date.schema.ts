import Joi from 'joi';
import buildSchema from './build';

export const DateSchema = buildSchema('Date', ['weekday', 'future', 'between', 'past', 'month'], {
  start: Joi.string(),
  end: Joi.string(),
  dateLocale: Joi.string(),
  abbr: Joi.boolean()
});
