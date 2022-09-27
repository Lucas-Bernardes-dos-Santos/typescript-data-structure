import chalk from "chalk"

import Stack from "../data-structure/Stack.js"

const desc = chalk.rgb(235,179,16)

testPush()
// testSize()
// testIsEmpty()
// testPop()
// testPeek()

/* Descrição da função testPush()
  *
  * Função: push()
  * Propósito: Está função adiciona um elemento no topo da Pilha
  * Descrição: Primeiro será criada uma pilha numérica vazia, após isso adicionaremos
  * um elemento a ela (4), para confirmarmos que o elemento foi adicionar chamaremos
  * a função size() que retornará a quantidade de elementos da pilha, nesse caso deverá 
  * ser retornado 1.
  * 
*/
function testPush(): void {
  console.log(`\n${desc('stack.push()')}`)
  
  const stack = new Stack<number>()
  stack.push(4)

  stack.size() === 1 ? 
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

function testSize(): void {
  const stack = new Stack<number>()

  console.log(`${chalk.rgb(235,179,16)('Testing the function size: It returns the size of the Stack')}`)
  console.log(`\tCurrent Stack size - ${stack.size()}`)
  
  stack.push(4)
  
  console.log(`\tElement added to stack`)
  console.log(`\tCurrent Stack size, expected (1) - ${stack.size()}`)
  
  stack.size() === 1 ? console.log(`\t${chalk.green('Test Result: Passed')}`) : console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

function testIsEmpty(): void {
  const stack = new Stack<number>()

  console.log(`\n${chalk.rgb(235, 179, 16)('Testanto a função isEmpty: ela returna true caso a pilha esteja vazia e false caso tenha ao menos um elemento')}`)

  console.log(`\tResultado Esperado - true`)
  console.log(`\tResultado recebido - ${stack.isEmpty()}`)

  stack.isEmpty() === true ? console.log(`\t${chalk.green('Test Result: Passed')}`) : console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

function testPop(): void {
  const stack = new Stack<number>()

  console.log(`\n${chalk.rgb(235, 179, 16)('Testando a função pop - ela remove um elemento do topo da pilha')}`)
  console.log(`\tIniciando uma lista e adicionando os elementos 4, 5, 6 respectivamente`)

  stack.push(4)
  stack.push(5)
  stack.push(6)

  console.log(`\tRemovendo um elemento da lista`)
  stack.pop()

  console.log(`\tTeste: ${chalk.italic('Valor esperado')}/${chalk.italic('Valor Retornado')}`)
  console.log(`\tTamanho da lista: 2/${stack.size()}`)

  stack.size() === 2 ? console.log(`\t${chalk.green('Test Result: Passed')}`) : console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

function testPeek(): void {
  const stack = new Stack<number>()
  
  console.log(`\n${chalk.rgb(235,179,16)('Testando a função peek: ela retorna o valor presente no topo da Pilha')}`)
  console.log(`\tAdicionando os elementos 1, 2, 3, respectivamente em uma pilha vazia`)
  
  stack.push(1)
  stack.push(2)
  stack.push(3)
  
  console.log(`\tResultado Esperado - 3`)
  console.log(`\tResultado recebido - ${stack.peek()}`)
  
  stack.peek() === 3 ? console.log(`\t${chalk.green('Test Result: Passed')}`) : console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}