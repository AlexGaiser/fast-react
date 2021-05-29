import {
  scssExecutable,
  jestExecutable,
  paramExecutable,
} from './cliFunctions';

// To add support for a CLI Arg:
// 1. Add the argument to the cliOptions object with appropriate settings
// 2. Add the argument, with the same name, to the cliExecutables below
// 3. Add the functions to execute as the value for the key in cliExecutables

type Environment = 'development' | 'test' | 'production';
const environments: ReadonlyArray<Environment> = [
  'development',
  'test',
  'production',
];

// Defines the accepted CLI commands, and their options
const cliOptions: Record<string, unknown> = {
  scss: {
    type: 'boolean',
    alias: 'Include SCSS?',
    default: false,
  },
  jest: {
    type: 'boolean',
    alias: 'Include Jest?',
    default: false,
  },
  param: {
    type: 'string',
    alias: 'Test arg takes param',
    demandOption: true,
  },
  env: {
    choices: environments,
    demandOptions: true,
    describe: 'Environment Type',
  },
};

// matches cliOptions items with code to be executed should they be passed
const cliExecutables: { [key: string]: any } = {
  scss: scssExecutable,
  jest: jestExecutable,
  param: paramExecutable,
};

// Executed the methods in cliExecutables if the cli args contains that flag
const handleArguments: any = (yargsV: Record<string, unknown>) => {
  Object.entries(cliOptions).forEach(([key, value]) => {
    if (yargsV[key]) {
      cliExecutables[key](yargsV[key]);
    }
  });
};

export { cliOptions, handleArguments };
