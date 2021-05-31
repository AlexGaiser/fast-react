import {
  scssExecutable,
  jestExecutable,
  paramExecutable,
  envExecutable,
  templateExecutable,
  prettierExecutable,
  typescriptExecutable,
  nameExecutable,
  eslintExecutable,
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

type TemplateName = 'template 1' | 'template 2' | 'template 3';
const templateNames: ReadonlyArray<TemplateName> = [
  'template 1',
  'template 2',
  'template 3',
];

// Defines the accepted CLI commands, and their options
const cliOptions: Record<string, unknown> = {
  typescript: {
    type: 'boolean',
    alias: 'TypeScript?',
    default: false,
  },
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
  name: {
    type: 'string',
    alias: 'Author',
  },
  eslint: {
    type: 'boolean',
    alias: 'Include eslint?',
    default: false,
  },
  prettier: {
    type: 'boolean',
    alias: 'Include prettier?',
    default: false,
  },
  template: {
    choices: templateNames,
    demandOptions: true,
    describe: 'Select a Template',
    default: templateNames[0],
  },
  env: {
    choices: environments,
    demandOptions: true,
    describe: 'Environment Type',
  },
  param: {
    type: 'string',
    alias: 'Test arg takes param',
    //demandOptions: false,
  },
};

// matches cliOptions items with code to be executed should they be passed
const cliExecutables: { [key: string]: any } = {
  typescript: typescriptExecutable,
  scss: scssExecutable,
  jest: jestExecutable,
  name: nameExecutable,
  eslint: eslintExecutable,
  prettier: prettierExecutable,
  template: templateExecutable,
  param: paramExecutable,
  env: envExecutable,
};

// Executed the methods in cliExecutables if the cli args contains that flag
const handleArguments: any = (yargsV: Record<string, unknown>) => {
  Object.entries(cliOptions).forEach(([key]) => {
    if (yargsV[key]) {
      cliExecutables[key](yargsV[key]);
    }
  });
};

export { cliOptions, handleArguments, Environment };
