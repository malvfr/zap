import { load } from 'js-yaml';

export const parseFile = (fileAsString: string) => {
  const data = load(fileAsString);

  console.log('YAML_DATA', JSON.stringify(data));

  return data;
};
