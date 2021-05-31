#!/usr/bin/env node

import { clone } from './services/utils.service';
import * as yargs from 'yargs';
import { cliOptions, handleArguments } from './cliOptions';

const argv = yargs.options(cliOptions).argv;
handleArguments(argv);
