import faker from 'faker';

const getFaker = (locale: string) => {
  faker.setLocale(locale);

  return faker;
};
