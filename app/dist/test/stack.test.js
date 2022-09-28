import chalk from "chalk";
import Stack from "../data-structure/Stack.js";
const desc = chalk.rgb(235, 179, 16);
testPush();
testSize();
testIsEmpty_StackVazia();
testIsEmpty_StackCheia();
// testPop()
// testPeek()
/* Descrição da função testPush()
  *
  * Propósito: Está função adiciona um elemento no topo da Pilha
  * Descrição: Primeiro será criada uma pilha numérica vazia, após isso adicionaremos
  * um elemento a ela (4), para confirmarmos que o elemento foi adicionar chamaremos
  * a função size() que retornará a quantidade de elementos da pilha, nesse caso deverá
  * ser retornado 1.
  *
*/
function testPush() {
    console.log(`\n${desc('Testando o método push()')}`);
    const stack = new Stack();
    stack.push(4);
    stack.size() === 1 ?
        console.log(`\t${chalk.green('Test Result: Passed')}`) :
        console.log(`\t${chalk.red('Test Resuld: Failed')}`);
}
/* Descrição da função testSize()
  *
  * Propósito: Está função retorna a quantidade de elemento em uma pilha
  * Descrição: Primeiro será criada uma pilha numérica vazia, após isso
  * dois elemento serão adicionados a ela, então faremos o teste, para isso
  * a função size() deverá retornar o valor 2
*/
function testSize() {
    const stack = new Stack();
    console.log(`${desc('Testando o método size()')}`);
    stack.push(4);
    stack.push(5);
    stack.size() === 2 ?
        console.log(`\t${chalk.green('Test Result: Passed')}`) :
        console.log(`\t${chalk.red('Test Resuld: Failed')}`);
}
/*
  *
  * Propósito: O método isEmpty retorna true caso a pilha esteja vazia
  *   e false caso ela se encontre preenchida com um ou mais elementos
  *
  * Descrição: A primeira função vai testar o método com uma pilha vazia
  *   já na segunda a pilha será preenchida com dois elementos, logo o
  *   método isEmpty deverá retornar false
  *
*/
function testIsEmpty_StackVazia() {
    const stack = new Stack();
    console.log(`${desc('Testando o método isEmpty, com a pilha vazia.')}`);
    stack.isEmpty() === true ?
        console.log(`\t${chalk.green('Test Result: Passed')}`) :
        console.log(`\t${chalk.red('Test Resuld: Failed')}`);
}
function testIsEmpty_StackCheia() {
    const stack = new Stack();
    console.log(`${desc('Testando o método isEmpty, com a pilha preenchida.')}`);
    stack.push(1);
    stack.push(12);
    stack.push(13);
    stack.isEmpty() === false ?
        console.log(`\t${chalk.green('Test Result: Passed')}`) :
        console.log(`\t${chalk.red('Test Resuld: Failed')}`);
}
function testPop() {
    const stack = new Stack();
    console.log(`\n${chalk.rgb(235, 179, 16)('Testando a função pop - ela remove um elemento do topo da pilha')}`);
    console.log(`\tIniciando uma lista e adicionando os elementos 4, 5, 6 respectivamente`);
    stack.push(4);
    stack.push(5);
    stack.push(6);
    console.log(`\tRemovendo um elemento da lista`);
    stack.pop();
    console.log(`\tTeste: ${chalk.italic('Valor esperado')}/${chalk.italic('Valor Retornado')}`);
    console.log(`\tTamanho da lista: 2/${stack.size()}`);
    stack.size() === 2 ? console.log(`\t${chalk.green('Test Result: Passed')}`) : console.log(`\t${chalk.red('Test Resuld: Failed')}`);
}
function testPeek() {
    const stack = new Stack();
    console.log(`\n${chalk.rgb(235, 179, 16)('Testando a função peek: ela retorna o valor presente no topo da Pilha')}`);
    console.log(`\tAdicionando os elementos 1, 2, 3, respectivamente em uma pilha vazia`);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log(`\tResultado Esperado - 3`);
    console.log(`\tResultado recebido - ${stack.peek()}`);
    stack.peek() === 3 ? console.log(`\t${chalk.green('Test Result: Passed')}`) : console.log(`\t${chalk.red('Test Resuld: Failed')}`);
}
