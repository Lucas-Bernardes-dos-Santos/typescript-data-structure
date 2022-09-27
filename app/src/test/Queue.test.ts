import chalk from "chalk"
import Queue from "../data-structure/Queue.js"

const desc = chalk.rgb(235,179,16)

testEnqueue()
testSize()
testIsEmpty_FilaVazia()
testIsEmpty_FilaCheia()
testDequeue_FilaVazia()
testDequeue_FilaCheia()

/*
  *
  * Propósito: Adicionar um novo elemento a Fila
  * 
  * Descrição: Uma fila numérica será criada, adicionaremos 
  *   então um elemento a ela, para testarmos se o elemento 
  *   realmente foi inserido verificaremos o seu tamanho,
  *   caso retorne 1 o elemento foi realmente adicionado a fila
  * 
*/
function testEnqueue(): void {
  const queue = new Queue<number>()

  console.log(desc(`Testando a função enqueue`))

  queue.enqueue(7)

  queue.size() === 1 ? 
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`) 
}

/*
  *
  * Propósito: Retornar o tamanho da Fila
  * 
  * Descrição: Uma fila numérica será criada, então adicionaremos
  *   a ela dois elementos, chamaremos a função size e o valor 
  *   retornado deverá ser igual a 2
  * 
*/
function testSize(): void {
  const queue = new Queue<number>()

  console.log(desc(`Testando a função size`))

  queue.enqueue(7)
  queue.enqueue(8)

  queue.size() === 2 ? 
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`) 
}

/*
  *
  * Propósito: O método isEmpty retorna verdadeiro caso a fila esteja vazia
  *   e falso caso haja algum elemento na fila
  * 
  * Descrição: Como podem ser retornados dois valores foram criadas duas 
  *   funções, na primeira uma lista vazia será criada e na uma outra lista 
  *   será criada porém adicionaremos dois elementos a ela. Na primeira a função
  *   isEmpty retornará true e na segunda false
  * 
*/
function testIsEmpty_FilaVazia(): void {
  const queue = new Queue<number>()

  console.log(desc(`Testand a função isEmpty, com a fila vazia`))

  queue.isEmpty() === true ? 
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`) 
}

function testIsEmpty_FilaCheia(): void {
  const queue = new Queue<number>()

  console.log(desc(`Testand a função isEmpty, com a fila preenchida com dois elementos`))

  queue.enqueue(10)
  queue.enqueue(20)

  queue.isEmpty() === false ? 
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

/*
  *
  * Propóstio: A função dequeue remove o primeiro elemento da fila
  *   retornando o elemento removido da fila, caso não haja nenhum
  *   elemento o valor undefined é retornado
  * 
  * Descrição: Como dois valores podem ser retornados, duas funções
  *   serão criadas para testar seus resultados. Na primeira função
  *   pediremos para removermos um elemento de sua fila, que estará
  *   vazia, retornando assim undefined, já na segunda adicionaremos
  *   três valor (1, 2, 3) respectivamente e então chamaremos o método
  *   dequeue. E para garantirmos que um elemento realmente foi eliminado
  *   chamaremos a função size para vermos se a fila, da segunda função,
  *   possuí apenas dois elementos
  * 
*/
function testDequeue_FilaVazia(): void {
  const queue = new Queue<number>()

  console.log(desc(`Testand a função dequeue, com a fila vazia`))

  queue.dequeue() === undefined ? 
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

function testDequeue_FilaCheia(): void {
  const queue = new Queue<number>()

  console.log(desc(`Testand a função dequeue, com a fila preenchida por 3 elementos`))

  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)

  queue.dequeue() === 1 && queue.size() === 2 ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}