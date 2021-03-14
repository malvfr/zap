import { loadFakerModule } from '../../shared/module_loader';
import { ZapSchemaPerson } from '../schema/zap.schema';

export default async ({ type, gender }: ZapSchemaPerson, locale: string): Promise<string> => {
  const { name } = await loadFakerModule(locale);

  if (!gender) {
    gender = 'M';
  }

  const numericGender = gender == 'F' ? 1 : 0;

  switch (type) {
    case 'firstName':
      return name.firstName(numericGender);
    case 'jobDescriptor':
      return name.jobDescriptor();
    case 'jobArea':
      return name.jobArea();
    case 'jobTitle':
      return name.jobTitle();
    case 'jobType':
      return name.jobType();
    case 'lastName':
      return name.lastName(numericGender);
    case 'middleName':
      return name.middleName(numericGender);
    case 'prefix':
      return name.prefix();
    case 'suffix':
      return name.suffix();
    case 'title':
      return name.title();
    default:
      throw new Error(`Invalid person ${type} option`);
  }
};
