import { ZapSchemaDate } from './date.schema';
import { ZapSchemaEnum } from './enum.schema';
import { ZapSchemaGit } from './git.schema';
import { ZapSchemaID } from './id.schema';
import { ZapSchemaPerson } from './person.schema';
import { ZapSchemaRandom } from './random.schema';
import { ZapSchemaVehicle } from './vehicle.schema';

export type ZapSchemaCategories = {
  vehicle?: ZapSchemaVehicle;
  git?: ZapSchemaGit;
  ID?: ZapSchemaID;
  date?: ZapSchemaDate;
  person?: ZapSchemaPerson;
  enum?: ZapSchemaEnum;
  random?: ZapSchemaRandom;
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
