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
