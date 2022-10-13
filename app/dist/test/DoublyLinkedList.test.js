import DoublyLinkedList from "../data-structure/DoublyLinkedList.js";
import { description, PASSED, FAILED } from "../util/test-util.js";
test_insert_A();
test_insert_B();
test_insert_C();
test_insert_D();
test_getElementAt_A();
test_getElementAt_B();
test_removeAt_A();
test_removeAt_B();
test_removeAt_C();
test_removeAt_D();
test_push_A();
test_push_B();
test_indexOf_A();
test_indexOf_B();
test_toString_A();
test_toString_B();
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
/*
  *
  * Função: O método removeAt remove um elemento
  *   de  uma  posição passada como parâmetro, o
  *   método então retornará o elemento removido
  *   da  lista, porém caso o index passado seja
  *   invalido  o valor undefined será retornado.
  *
  * Descrição:
  *   1. A função A testará o método removendo o
  *     primeiro  elemento de uma lista que tem
  *     apenas um elemento.
  *   2. A função B testará a remoção do primeiro
  *     elemento  em  uma  lista  com  mais de um
  *     elemento nela.
  *   3. A função C testará remoção de um elemento
  *     no meio da lista.
  *   4. A  função  D  testará a remoção do último
  *     elemento da lista
*/
function test_removeAt_A() {
    console.log(description(`Testando o método removeAt(), removendo o primeiro elemento de uma lista com apenas um elemento:`));
    let list = new DoublyLinkedList();
    list.insert(10, 0);
    let elementRemoved = list.removeAt(0);
    elementRemoved.element === 10 && list.getTail() === undefined ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_removeAt_B() {
    console.log(description(`Testando o método removeAt(), removendo o primeiro elemento de uma lista com mais de um elementos:`));
    let list = new DoublyLinkedList();
    list.insert(10, 0);
    list.insert(20, 1);
    list.insert(30, 2);
    let elementRemoved = list.removeAt(0);
    elementRemoved.element === 10 && list.getHead().previous === undefined ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_removeAt_C() {
    console.log(description(`Testando o método removeAt(), removendo o primeiro elemento do meio de uma :`));
    let list = new DoublyLinkedList();
    list.insert(10, 0);
    list.insert(20, 1);
    list.insert(30, 2);
    list.insert(40, 3);
    let elementRemoved = list.removeAt(2);
    elementRemoved.element === 30 && list.size() === 3 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_removeAt_D() {
    console.log(description(`Testando o método removeAt(), removendo o último elemento da lista:`));
    let list = new DoublyLinkedList();
    list.insert(10, 0);
    list.insert(20, 1);
    list.insert(30, 2);
    list.insert(40, 3);
    let elementRemoved = list.removeAt(3);
    elementRemoved.element === 40 && list.getTail().element === 30 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método push() adiciona um novo elemento
  *   na última posição da lista.
  *
  * Descrição:
  *   1. A função A vai testar o método inserindo um
  *     novo elemento em uma lista vazia.
  *   2. A função B vai testar o método inserindo um
  *     novo elemento um uma lista já preenchida.
  *
*/
function test_push_A() {
    console.log(description(`Testando o método push(), adicionando um novo elemento em uma lista vazia:`));
    let list = new DoublyLinkedList();
    list.push(10);
    list.getHead().element === 10 &&
        list.getTail().element === 10 &&
        list.size() === 1 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_push_B() {
    console.log(description(`Testando o método push(), adicionando um novo elemento em uma lista que já foi preenchida:`));
    let list = new DoublyLinkedList();
    list.push(10);
    list.push(20);
    list.push(30);
    list.getHead().element === 10 &&
        list.getTail().element === 30 &&
        list.size() === 3 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método indexOf retorna a posição
  *   de  um  elemento  passado como parâmetro.
  *   Caso  o  elemento  não  exista o valor -1
  *   será retornado.
  *
  * Descrição:
  *   1. A função A será testado o método sendo
  *     passado um valor que esteja na lista.
  *   2. A  função  B será testaremos passar um
  *     elemento  que  não  haja na função para
  *     testarmos o retorno -1.
  *
*/
function test_indexOf_A() {
    console.log(description(`Testando o método indexOf(), passando um elemento existente:`));
    let list = new DoublyLinkedList();
    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);
    list.indexOf(30) === 2 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_indexOf_B() {
    console.log(description(`Testando o método indexOf(), passando um elemento inexistente:`));
    let list = new DoublyLinkedList();
    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);
    list.indexOf(210) === -1 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método toString() retorna uma string
  *   mostrando todos os elentos contidos na lista.
  *   Caso  a  lista estaja vazia uma string vazia
  *   será retornada.
  *
  * Descrição:
  *   1. A  função  A vai testar o uso do método em
  *     uma lista vazia.
  *   2. A função B vai testar o método toString em
  *     uma lista preenchida
  *
*/
function test_toString_A() {
    console.log(description(`Testando o método toString(), em uma lista vazia:`));
    let list = new DoublyLinkedList();
    list.toString() === '' ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_toString_B() {
    console.log(description(`Testando o método toString(), em uma lista preenchida:`));
    let list = new DoublyLinkedList();
    list.push(10);
    list.push(20);
    list.push(30);
    list.toString() === '10, 20, 30' ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
