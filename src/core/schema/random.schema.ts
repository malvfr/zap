type ZapSchemaRandomType = 'string' | 'integer' | 'boolean' | 'float' | 'hexaDecimal' | 'word' | 'words' | 'image';
export type ZapSchemaRandom = {
  type: ZapSchemaRandomType;
  start?: number;
  min?: number;
  max?: number;
  length?: string;
  precision?: number;
};
