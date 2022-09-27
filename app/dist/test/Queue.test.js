import chalk from "chalk";
import Queue from "../data-structure/Queue.js";
const desc = chalk.rgb(235, 179, 16);
testEnqueue();
testSize();
/*
  *
  * Propósito: Adicionar um novo elemento a Fila
  * Descrição: Uma fila numérica será criada, adicionaremos
  * então um elemento a ela, para testarmos se o elemento
  * realmente foi inserido verificaremos o seu tamanho,
  * caso retorne 1 o elemento foi realmente adicionado a fila
  *
*/
function testEnqueue() {
    const queue = new Queue();
    console.log(desc(`Testing funciton enqueue`));
    queue.enqueue(7);
    queue.size() === 1 ?
        console.log(`\t${chalk.green('Test Result: Passed')}`) :
        console.log(`\t${chalk.red('Test Resuld: Failed')}`);
}
/*
  *
  * Propósito: Retornar o tamanho da Fila
  * Descrição: Uma fila numérica será criada, então adicionaremos
  * a ela dois elementos, chamaremos a função size e o valor
  * retornado deverá ser igual a 2
  *
*/
function testSize() {
    const queue = new Queue();
    console.log(desc(`Testing funciton size`));
    queue.enqueue(7);
    queue.enqueue(8);
    queue.size() === 2 ?
        console.log(`\t${chalk.green('Test Result: Passed')}`) :
        console.log(`\t${chalk.red('Test Resuld: Failed')}`);
}
