#!/usr/bin/env node

import { Command } from 'commander';
import { getVersion } from '../shared/package.helper';
import { join } from 'path';
import { readFile } from 'fs/promises';
import { parseFile } from '../core/parser';
import { start } from '../core/data_generator';
import { logSuccess } from '../shared/log_formatter';

type CliOpts = {
  file: string;
  csv: boolean;
  debug: boolean;
  locale: string;
};

(async () => {
  console.time('Execution Time');

  const program = new Command('Zap CLI');
  const version = getVersion();

  program.version(version);

  program
    .option('-d, --debug', 'outputs debugging information')
    .requiredOption('-f, --file <value>', 'the yml file with the database schema')
    .option('-l, --locale <value>', 'the data locale format', 'en_US')
    .option('-c, --csv', 'generate a csv output', false);

  program.parse(process.argv);

  const { debug, file, csv, locale } = program.opts() as CliOpts;

  if (debug)
    console.log({
      csv,
      debug,
      file,
      locale
    });

  try {
    const fileAsString = await readFile(join(process.cwd(), file), 'utf-8');

    const parsedFile = parseFile(fileAsString);
    await start(parsedFile, locale, csv);

    logSuccess(`\n DONE !!\n`);
    console.timeEnd('Execution Time');
  } catch (error) {
    console.warn('The schema definition file could not be loaded');
    console.error(error);
  }
})();
