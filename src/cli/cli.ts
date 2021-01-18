#!/usr/bin/env node

import { Command } from 'commander';
import { getVersion } from '../shared/package.helper';

const program = new Command('Zap CLI');
const version = getVersion();

program.version(version);

program
  .option('-d, --debug', 'output extra debugging')
  .option('-f, --file <value>', 'the yml file with the database schema')
  .option('-q, --quantity <value>', 'quantity of records produced')
  .option('-c, --csv', 'generate a csv output');

program.parse(process.argv);

const options = program.opts();

if (options?.debug) console.log(options);
