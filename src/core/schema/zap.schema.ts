export type ZapSchemaVehicle = 'vehicle' | 'color' | 'manufacturer' | 'model' | 'type' | 'vin' | 'fuel';

export type ZapSchemaGit = 'branch' | 'commitSha' | 'commitEntry' | 'commitMessage' | 'commitSha' | 'shortSha';

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
