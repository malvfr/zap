type ZapSchemaDateType = 'weekday' | 'future' | 'between' | 'past' | 'month';
export type ZapSchemaDate = {
  type: ZapSchemaDateType;
  start?: string;
  end?: string;
  dateLocale?: string;
  abbr?: boolean;
};
