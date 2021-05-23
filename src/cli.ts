#!/usr/bin/env node

import { clone } from './services/utils.service';
import * as yargs from 'yargs';
import {cliOptions, handleArguments} from './cli_options';


const argv = yargs.options(cliOptions).argv;
handleArguments(argv);