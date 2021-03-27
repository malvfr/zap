type ZapSchemaPersonType =
  | 'firstName'
  | 'lastName'
  | 'middleName'
  | 'jobTitle'
  | 'prefix'
  | 'suffix'
  | 'title'
  | 'jobDescriptor'
  | 'jobArea'
  | 'jobType';

export type ZapSchemaPerson = { type: ZapSchemaPersonType; gender?: 'M' | 'F' };
