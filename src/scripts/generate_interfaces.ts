import { convertFromDirectory } from 'joi-to-typescript';

convertFromDirectory({
  schemaDirectory: './src/core/schema',
  schemaFileSuffix: '.schema',
  typeOutputDirectory: './src/core/interfaces',
  debug: true
});
