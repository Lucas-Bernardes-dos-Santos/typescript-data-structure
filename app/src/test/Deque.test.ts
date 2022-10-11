import chalk from "chalk"
import Deque from "../data-structure/Deque.js"
import { extra, description } from "../util/test-util.js"

// FIXME: começar a usar as novas diretrizes para o uso da biblioteca chalk
// FIXME: Melhorar os comentários sobre as funções teste e alterar seus nomes para seguir o padrão da classe DoublyLinkedList 

testAddFront()
testAddBack()
testRemoveFront_DequeVazio()
testRemoveFront_DequeCheio()
testRemoveBack_DequeVazio()
testRemoveBack_DequeCheio()
testIsEmpty_DequeVazio()
testIsEmpty_DequeCheio()
testPeekBack_DequeVazio()
testPeekBack_DequeCheio()
testPeekFront_DequeVazio()
testPeekFront_DequeCheio()
testSize_DequeFirstPositivo()
testSize_DequeFirstNegativo()

/*
  *
  * Propósito: O método addFront() adiciona novo elemento
  *   na frente do deque
  * 
*/
function testAddFront():void {
  const deque = new Deque<number>()

  console.log(description(`Testando o método addFront()`))

  deque.addFront(10)
  deque.addFront(20)

  deque.peekFront() === 20 ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)  
}

/*
  *
  * Propósito: O método addBack, adiciona um elemento no 
  *   final da estrutura Deque
  * 
  * Descrição: Um Deque numérico será criado, após isso
  *   será adicionar com os seguintes valores, 10 e 20 
  *   respectivamente, para verificar se o método está 
  *   funcionando chamaremos dois outros métodos, o size() 
  *   para verificar se está retornando a quantidade 
  *   correta, no caso 2, e o método peekBack() que deverá 
  *   retornar 20, o último elemento que foi adicionado.
  * 
*/
function testAddBack(): void {
  const deque = new Deque<number>()

  console.log(description(`Testando o método addBack()`))

  deque.addBack(10)
  deque.addBack(20)

  deque.size() === 2 && deque.peekBack() === 20 ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`) 
}

/*
  *
  * Propósito: O método removeFront() remove o primeiro elemento do deque
  *   e retorna o elemento removido, caso não haja elementos undefined é
  *   retornado.
  * 
  * Descrição: Na primeira função será usado um deque vazio
  *   e o valor de retorno deverá ser undefinedUm deque numérica. 
  *   Na segunda função será criado e prenchido com os valores 
  *   10 e 20 respectivamente, após usar o método removeFront()
  *   o valor 10 deverá ser retornado. 
  * 
*/
function testRemoveFront_DequeVazio(): void {
  const deque = new Deque<number>()

  console.log(description(`Testando o método removeFront(), com o deque vazio`))

  deque.removeFront() === undefined ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

function testRemoveFront_DequeCheio(): void {
  const deque = new Deque<number>()
  
  console.log(description(`Testando o método removeFront(), com o deque preenchido`))

  deque.addBack(10)
  deque.addBack(20)

  deque.removeFront() === 10 ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

/*
  *
  * Propósito: O método removeBack() remove o último elemento do deque
  *   e retorna o elemento removido, caso não haja elementos undefined é
  *   retornado.
  * 
  * Descrição: Identico ao Remove Front
  * 
*/
function testRemoveBack_DequeVazio(): void {
  const deque = new Deque<number>()

  console.log(description(`Testando o método removeBack(), com o deque vazio`))

  deque.removeBack() === undefined ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

function testRemoveBack_DequeCheio(): void {
  const deque = new Deque<number>()
  
  console.log(description(`Testando o método removeBack(), com o deque preenchido`))

  deque.addBack(10)
  deque.addBack(20)

  deque.removeBack() === 20 ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

/*
  *
  * Propósito: O método isEmpyt() retorna true caso o deque esteja vazio
  *   e retornará false caso haja algum elemento dentro do que
  * 
  * Descrição: Como é possível retornar dois valores, será testado duas
  *   vezes o método isEmpyt, na primeira função ela será chamada apartir
  *   de um deque vazio, resultando em um true retornado, e na segunda
  *   o deque estará preenchido por dois valor, resultando no retorno
  *   de um false
  * 
*/
function testIsEmpty_DequeVazio(): void {
  const deque = new Deque<number>()

  console.log(description(`Testando o método isEmpty(), com o deque vazio`))

  deque.isEmpty() === true ? 
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`) 
}

function testIsEmpty_DequeCheio(): void {
  const deque = new Deque<number>()
  
  console.log(description(`Testando o método isEmpty(), com o deque preenchido`))

  deque.addBack(10)
  deque.addBack(20)

  deque.isEmpty() === false ? 
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

/*
  *
  * Propóstio: O método peekBack() retorna o último elemento
  *   da estrutura Deque, porém caso o deque esteja vazio o
  *   método retornará undefined
  * 
*/
function testPeekBack_DequeVazio() {
  const deque = new Deque<number>()

  console.log(description(`Testando o métod peekBack(), com o deque vazio`))

  deque.peekBack() === undefined ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

function testPeekBack_DequeCheio() {
  const deque = new Deque<number>()
  
  console.log(description(`Testando o métod peekBack(), com o deque preenchido`))

  deque.addBack(10)
  deque.addBack(13)

  deque.peekBack() === 13 ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

/*
  *
  * Propóstio: O método peekFront() retorna o último elemento
  *   da estrutura Deque, porém caso o deque esteja vazio o
  *   método retornará undefined
  * 
*/
function testPeekFront_DequeVazio() {
  const deque = new Deque<number>()

  console.log(description(`Testando o métod peekFront(), com o deque vazio`))

  deque.peekFront() === undefined ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

function testPeekFront_DequeCheio() {
  const deque = new Deque<number>()
  
  console.log(description(`Testando o métod peekFront(), com o deque preenchido`))

  deque.addFront(10)
  deque.addFront(13)

  deque.peekFront() === 13 ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

/*
  *
  * Propósito: O método size retorna a quantidade de elementos
  *   dentro um deque
  * 
  * Descrição: Como na estrutura deque o primeiro elemento pode
  *   estar em uma chave com um valor negativo existem existem 
  *   dois cenários que podem acontecer o primeire quando o first
  *   é negativo o segundo é quando o first é maior ou igual a zero,
  *   o segundo cenário é identico ao usado na strutura Queue.
  * 
*/
function testSize_DequeFirstPositivo():void {
  const deque = new Deque<number>()

  console.log(description(`Testando o método size(), com o first maior ou igual a zero`))

  deque.addBack(10)
  deque.addBack(20)

  deque.size() === 2 ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

function testSize_DequeFirstNegativo():void {
  const deque = new Deque<number>()
  
  console.log(description(`Testando o método size(), com o first negativo`))

  deque.addFront(10)
  deque.addFront(20)

  deque.size() === 2 ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}