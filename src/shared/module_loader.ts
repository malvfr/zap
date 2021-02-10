export const loadFakerModule = async (locale: string) => {
  let generatorModule;
  try {
    generatorModule = await import(`faker/locale/${locale}`);
  } catch (error) {
    throw new Error(`Error importing locale "${locale}". Is it correct?`);
  }

  return generatorModule;
};
