type ZapSchemaVehicle = 'vehicle' | 'color';
type ZapSchemaGit = 'branch' | 'commitSha';

export type ZapSchemaCategories = {
  vehicle: ZapSchemaVehicle;
  git: ZapSchemaGit;
};

type ZapSchemaField = {
  name: string;
  category: ZapSchemaCategories;
};

export type ZapSchema = {
  tables: [
    {
      name: string;
      quantity: number;
      fields: [ZapSchemaField];
    }
  ];
};
