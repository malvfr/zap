import buildSchema from './build';

export const GitSchema = buildSchema('Git', ['branch', 'commitEntry', 'commitMessage', 'commitSha', 'shortSha']);
