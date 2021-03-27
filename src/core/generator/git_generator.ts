import { loadFakerModule } from '../../shared/module_loader';
import { ZapSchemaGit } from '../schema/git.schema';

export default async ({ type }: ZapSchemaGit, locale: string): Promise<string> => {
  const { git } = await loadFakerModule(locale);

  switch (type) {
    case 'branch':
      return git.branch();
    case 'commitEntry':
      return git.commitEntry();
    case 'commitMessage':
      return git.commitMessage();
    case 'commitSha':
      return git.commitSha();
    case 'shortSha':
      return git.shortSha();
    default:
      throw new Error(`Invalid git ${type} option`);
  }
};
