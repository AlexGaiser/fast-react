#!/usr/bin/env node
import * as yargs from 'yargs';
import { cliOptions, handleArguments } from './cli/cliOptions';

const argv = yargs.options(cliOptions).argv;
handleArguments(argv);
