import { Environment } from './cliOptions';

export const scssExecutable: any = function () {
  console.log('scss flag triggered!');
  console.log();
};

export const jestExecutable: any = () => {
  console.log('jest flag triggered!');
  console.log('Other things happen here');
  console.log();
};

export const paramExecutable: any = (param: string) => {
  console.log('Proof of concept');
  console.log('Logs parameter from CLI');
  console.log(param);
  console.log();
};

export const envExecutable: any = (param: Environment) => {
  console.log('Environment Executable triggered');
  const message = `Type: ${param}`;
  console.log(message);
};

export const typescriptExecutable: any = () => {
  console.log('TypeScript Executable triggered');
};

export const nameExecutable: any = () => {
  console.log('Name Executable triggered');
};

export const eslintExecutable: any = () => {
  console.log('Eslint Executable triggered');
};

export const prettierExecutable: any = () => {
  console.log('Prettier Executable triggered');
};

export const templateExecutable: any = () => {
  console.log('Template Executable triggered');
};
