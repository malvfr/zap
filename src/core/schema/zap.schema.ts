type ZapSchemaVehicleType = 'vehicle' | 'color' | 'manufacturer' | 'model' | 'type' | 'vin' | 'fuel';
export type ZapSchemaVehicle = { type: ZapSchemaVehicleType };

type ZapSchemaGitType = 'branch' | 'commitSha' | 'commitEntry' | 'commitMessage' | 'commitSha' | 'shortSha';
export type ZapSchemaGit = { type: ZapSchemaGitType };

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

type ZapSchemaIDType = 'uuid' | 'sequentialInteger' | 'randomInteger';
export type ZapSchemaID = { type: ZapSchemaIDType; start?: number; min?: number; max?: number };

export type ZapSchemaEnum = { values: string[] };

export type ZapSchemaCategories = {
  vehicle: ZapSchemaVehicle;
  git: ZapSchemaGit;
  ID: ZapSchemaID;
  person: ZapSchemaPerson;
  enum: ZapSchemaEnum;
};

export type ZapSchemaMetadata = {
  index: number;
};

type ZapSchemaField = {
  name: string;
  category: ZapSchemaCategories;
};

export type ZapSchemaTable = {
  name: string;
  quantity: number;
  fields: ZapSchemaField[];
};
export type ZapSchema = {
  tables: ZapSchemaTable[];
};
