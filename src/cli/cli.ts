#!/usr/bin/env node

import { Command } from 'commander';
import { getVersion } from '../shared/package.helper';
import { join } from 'path';
import { readFile } from 'fs/promises';

type CliOpts = {
  file: string;
  quantity?: number;
  csv?: boolean;
  debug?: boolean;
};

(async () => {
  const program = new Command('Zap CLI');
  const version = getVersion();

  program.version(version);

  program
    .option('-d, --debug', 'outputs debugging information')
    .requiredOption(
      '-f, --file <value>',
      'the yml file with the database schema'
    )
    .option('-q, --quantity <value>', 'quantity of records produced', '100')
    .option('-c, --csv', 'generate a csv output');

  program.parse(process.argv);

  const options = program.opts() as CliOpts;

  const validateOptions = (options: CliOpts) => {
    if (isNaN(Number(options?.quantity))) {
      console.error(`The quantity option must be a number`);
      throw new Error('Validation error');
    }
  };

  validateOptions(options);

  if (options?.debug) console.log(options);

  if (options?.file) {
    try {
      let yaml_file = await readFile(join(process.cwd(), options.file));

      console.log(yaml_file);
    } catch (error) {
      console.warn('The file could not be loaded');
      console.error(error);
    }
  }
})();
