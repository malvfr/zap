import { loadFakerModule } from '../../shared/module_loader';
import { Date } from '../interfaces';

export default async ({ type, start, end, abbr, dateLocale }: Date, locale: string): Promise<string> => {
  const { date } = await loadFakerModule(locale);

  if (!start) {
    start = new Date().toString();
  }

  if (!end) {
    end = new Date().toString();
  }

  switch (type) {
    case 'weekday':
      return date.weekday({ abbr });
    case 'month':
      return date.month({ abbr });
    case 'past':
      return date.past().toLocaleDateString(dateLocale);
    case 'between':
      return date.between(start, end).toLocaleDateString(dateLocale);
    case 'future':
      return date.future().toLocaleDateString(dateLocale);
    default:
      throw new Error(`Invalid Date ${type} option`);
  }
};
