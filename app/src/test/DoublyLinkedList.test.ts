import DoublyLinkedList from "../data-structure/DoublyLinkedList.js"
import { description, PASSED, FAILED } from "../util/test-util.js"

test_insert_A()
test_insert_B()
test_insert_C()
test_insert_D()

/*
  *
  * Função: O método insert adiciona um novo elemento
  *   em uma posição, que será passada como parâmentro.
  * 
  * Descrição:
  *   1. A função A testará a inserção de um elemento na
  *     primeira posição com a lista vazia.
  *   2. A função B testará a inserção de um elemento na
  *     primeira  posição  com  a  lista  já  tendo sido 
  *     preenchida preenchida
  *   3. A função C testará a inserção de um elemento na
  *     última posição da lista
  *   4. A função D testará a inserção de um elemento no
  *     meio de uma lista preenchida
  * 
*/
function test_insert_A(): void {
  console.log(description(`Testando o método insert, inserindo um novo elemento (10) na primeira posição em uma lista vazia:`))

  let list = new DoublyLinkedList<number>()

  list.insert(10, 0)
  let head = list.getHead()
  let tail = list.getTail()

  head?.element === 10 && tail?.element === 10 ?
    console.log(PASSED(`\tTeste Result: Passed`)) :
    console.log(FAILED(`\tTeste Result: Failed`))
}
function test_insert_B(): void {
  console.log(description(`Testando o método insert, inserindo um novo elemento (10) na primeira posição em uma lista já preenchida:`))

  let list = new DoublyLinkedList<number>()

  list.insert(20, 0)
  list.insert(30, 1)

  list.insert(10, 0)
  let head = list.getHead()
  let tail = list.getTail()

  head?.element === 10 && tail?.element === 30 ?
    console.log(PASSED(`\tTeste Result: Passed`)) :
    console.log(FAILED(`\tTeste Result: Failed`))  
}
function test_insert_C(): void {
  console.log(description(`Testando o método insert, inserindo um novo elemento (10) na primeira última posição da lista:`))

  let list = new DoublyLinkedList<number>() 

  list.insert(10, 0)
  list.insert(20, 1)
  list.insert(30, 2)

  let tail = list.getTail()

  tail?.element === 30 ?
    console.log(PASSED(`\tTeste Result: Passed`)) :
    console.log(FAILED(`\tTeste Result: Failed`))
}
function test_insert_D(): void {
  console.log(description(`Testando o método insert, inserindo um novo elemento (20) no meio de uma lista:`))

  let list = new DoublyLinkedList<number>()

  list.insert(10, 0)
  list.insert(30, 1)

  list.insert(20, 1)
  let doublyNode = list.getElementAt(1)

  doublyNode?.element === 20 ?
    console.log(PASSED(`\tTeste Result: Passed`)) :
    console.log(FAILED(`\tTeste Result: Failed`))   
}