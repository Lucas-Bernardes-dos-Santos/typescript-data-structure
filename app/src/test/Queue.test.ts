import chalk from "chalk"
import Queue from "../data-structure/Queue.js"

const desc = chalk.rgb(235,179,16)
// FIXME: começar a usar as novas diretrizes para o uso da biblioteca chalk
// FIXME: Melhorar os comentários sobre as funções teste e alterar seus nomes para seguir o padrão da classe DoublyLinkedList

testEnqueue()
testSize()
testIsEmpty_FilaVazia()
testIsEmpty_FilaCheia()
testDequeue_FilaVazia()
testDequeue_FilaCheia()
testClear()
testPeek_FilaVazia()
testPeek_FilaCheia()
testToStrin_FilaVazia()
testToStrin_FilaCheia()

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

  console.log(desc(`Testando a função isEmpty, com a fila vazia`))

  queue.isEmpty() === true ? 
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`) 
}

function testIsEmpty_FilaCheia(): void {
  const queue = new Queue<number>()

  console.log(desc(`Testando a função isEmpty, com a fila preenchida com dois elementos`))

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

  console.log(desc(`Testando a função dequeue, com a fila vazia`))

  queue.dequeue() === undefined ? 
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

function testDequeue_FilaCheia(): void {
  const queue = new Queue<number>()

  console.log(desc(`Testando a função dequeue, com a fila preenchida por 3 elementos`))

  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)

  queue.dequeue() === 1 && queue.size() === 2 ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

/*
  *
  * Propósito: A função clear(), como seu nome diz, limpa a lista
  *   eliminando todos os seus elementos
  * 
  * Descrição: Uma fila numérica será criada, após isso serão 
  *   adicionados 3 elementos dentro da fila seguido do uso da 
  *   função clear, para confirmar que a fila foi limpa o método
  *   isEmpty será chamado e deverá retornar true
  * 
*/
function testClear(): void {
  const queue = new Queue<number>()

  console.log(desc(`Testando a função clear`))

  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)

  queue.clear()

  queue.isEmpty() === true ? 
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

/*
  *
  * Propósito: A função peek retorna o primero elemento da fila
  * 
  * Descrição: Como é possível retornar dois valor duas funções
  *   serão criada. Na primeira função, uma lista vazia será 
  *   criada e quando chamarmos o método peek ele deverá retornar 
  *   undefined Após criada, a segunda função, uma fila numérica
  *   adicionaremos 3 elementos a ela, 10, 20 e 30 respectivamente,
  *   utilizaremos então o método peek que deverá retornar o
  *   elemento de número 10.
  *   
*/
function testPeek_FilaVazia(): void {
  const queue = new Queue<number>()

  console.log(desc(`Testando a função peek, com a fila vazia`))

  queue.peek() === undefined ? 
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

function testPeek_FilaCheia(): void {
  const queue = new Queue<number>()

  console.log(desc(`Testando a função peek, com a fila preenchida com 3 elementos`))

  queue.enqueue(10)
  queue.enqueue(20)
  queue.enqueue(30)

  queue.peek() === 10 ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)  
}

/*
  *
  * Propósito: A função to string devolve a fila transformada
  *   em uma string
  * 
  * Descrição: Como ela pode retornar dois possíves resultados
  *   undefined caso a fila esteja vazia ou uma string caso a
  *   fila esteja preenchida vamos suar duas funções para testa-la.
  *   Na primeira uma fila vazia será criada, retornando assim undefined,
  *   já na segunda uma fila numérica será criada e então adicionaremos
  *   os seguintes elementos 10, 20 e 30, respectivemente, seguindo 
  *   chamaremos a função toString que deverá retornar "10, 20, 30"
  * 
*/
function testToStrin_FilaVazia(): void {
  const queue = new Queue<number>()

  console.log(desc(`Testando a função toString, com a fila vazia`))

  queue.toString() === undefined ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

function testToStrin_FilaCheia(): void {
  const queue = new Queue<number>()

  console.log(desc(`Testando a função toString, com a fila preenchida`))

  queue.enqueue(10)
  queue.enqueue(20)
  queue.enqueue(30)

  queue.toString() === "10, 20, 30" ?
  console.log(`\t${chalk.green('Test Result: Passed')}`) : 
  console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}