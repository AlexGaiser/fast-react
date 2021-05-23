export const scssExecutable: Function = function() {
  console.log("scss flag triggered!");
  console.log();
};

export const jestExecutable: Function = function() {
  console.log("jest flag triggered!");
  console.log("Other things happen here");
  console.log();
};

export const paramExecutable: Function = (param: string) => {
  console.log("Proof of concept");
  console.log("Logs parameter from CLI");
  console.log(param);
  console.log();
};