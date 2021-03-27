type ZapSchemaIDType = 'uuid' | 'sequentialInteger' | 'randomInteger';
export type ZapSchemaID = { type: ZapSchemaIDType; start?: number; min?: number; max?: number };
