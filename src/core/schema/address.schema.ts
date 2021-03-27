type ZapSchemaAddressType = 'city' | 'state' | 'country' | 'streetName' | 'streetAddress' | 'countryCode' | 'zipCode';

export type ZapSchemaAddress = {
  type: ZapSchemaAddressType;
  abbr?: boolean;
};
