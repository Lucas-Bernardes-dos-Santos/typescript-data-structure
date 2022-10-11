import DoublyLinkedList from "../data-structure/DoublyLinkedList.js";
import { description, PASSED, FAILED } from "../util/test-util.js";
test_insert_A();
test_insert_B();
test_insert_C();
test_insert_D();
test_getElementAt_A();
test_getElementAt_B();
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
function test_insert_A() {
    console.log(description(`Testando o método insert, inserindo um novo elemento (10) na primeira posição em uma lista vazia:`));
    let list = new DoublyLinkedList();
    list.insert(10, 0);
    let head = list.getHead();
    let tail = list.getTail();
    (head === null || head === void 0 ? void 0 : head.element) === 10 && (tail === null || tail === void 0 ? void 0 : tail.element) === 10 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_insert_B() {
    console.log(description(`Testando o método insert, inserindo um novo elemento (10) na primeira posição em uma lista já preenchida:`));
    let list = new DoublyLinkedList();
    list.insert(20, 0);
    list.insert(30, 1);
    list.insert(10, 0);
    let head = list.getHead();
    let tail = list.getTail();
    (head === null || head === void 0 ? void 0 : head.element) === 10 && (tail === null || tail === void 0 ? void 0 : tail.element) === 30 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_insert_C() {
    console.log(description(`Testando o método insert, inserindo um novo elemento (10) na primeira última posição da lista:`));
    let list = new DoublyLinkedList();
    list.insert(10, 0);
    list.insert(20, 1);
    list.insert(30, 2);
    let tail = list.getTail();
    (tail === null || tail === void 0 ? void 0 : tail.element) === 30 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_insert_D() {
    console.log(description(`Testando o método insert, inserindo um novo elemento (20) no meio de uma lista:`));
    let list = new DoublyLinkedList();
    list.insert(10, 0);
    list.insert(30, 1);
    list.insert(20, 1);
    let doublyNode = list.getElementAt(1);
    (doublyNode === null || doublyNode === void 0 ? void 0 : doublyNode.element) === 20 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método getElementAt retorná o DoublyNode
  *   da  posição passada como parâmetro, caso o index
  *   passado  seja  inválido undefined será retornado.
  *
  * Descrição:
  *   1. A função A testará o método enviando um index
  *     válido, o DoublyNode correto.
  *   2. A função B testará o método enviando um index
  *     inválido, retornando o valor undefined.
  *
*/
function test_getElementAt_A() {
    console.log(description(`Testando o método getElementAt(), passando um index válido:`));
    let list = new DoublyLinkedList();
    list.insert(10, 0);
    list.insert(20, 1);
    list.insert(30, 2);
    let node = list.getElementAt(1);
    (node === null || node === void 0 ? void 0 : node.element) === 20 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_getElementAt_B() {
    console.log(description(`Testando o método getElementAt(), passando um index inválido:`));
    let list = new DoublyLinkedList();
    list.insert(10, 0);
    list.insert(20, 1);
    list.insert(30, 2);
    list.getElementAt(10) === undefined ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
