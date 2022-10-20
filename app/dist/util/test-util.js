import chalk from "chalk";
// FIXME: Alterar a const description para caixa alta e alterar em todos os arquivos que usam ela. 
const description = chalk.rgb(235, 179, 16); // Laranja
const PASSED = chalk.rgb(32, 245, 9);
const FAILED = chalk.rgb(250, 11, 0);
const extra = chalk.blue;
export { extra };
export { description, PASSED, FAILED };
