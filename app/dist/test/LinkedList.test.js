import LinkedList from "../data-structure/LinkedList.js";
import { description, PASSED, FAILED } from "../util/test-util.js";
// FIXME: Melhorar os comentários sobre as funções teste e alterar seus nomes para seguir o padrão da classe DoublyLinkedList
test_push_ListaVazia();
test_push_ListaCheia();
test_removeAt_Head();
test_removeAt_Meio_Fim();
test_removeAt_undefined();
test_insert_Head();
test_insert_Meio_Fim();
test_inser_undefined();
test_indexOf_A();
test_indexOf_B();
test_toString_A();
test_toString_B();
/*
  *
  * Propósito: A função push acrescenta um nove elemento
  *   no final da lista.
  *
*/
function test_push_ListaVazia() {
    let list = new LinkedList();
    console.log(description(`Testando o método push() com a lista vazia`));
    list.push(10);
    list.size() === 1 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_push_ListaCheia() {
    let list = new LinkedList();
    console.log(description(`Testando o método push() com a lista preenchida`));
    list.push(10);
    list.push(20);
    list.push(30);
    list.size() === 3 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Propósito: O método removeAt remove um elemento
  *   na posição passada como argumento, caso a posição
  *   passada como argumento seja invalida o valor
  *   undefined será retornado do contrário o elemento
  *   removido será retornado
  *
  * Descrição:
  *   A primeira função vai testar remover o primeiro elemento da lista.
  *   Na segunda função será testado a remoção de um elemento no meio da lista
  *   Na terceira função será passado um valor invalido para retornar undefined
  *
  *
*/
function test_removeAt_Head() {
    let list = new LinkedList();
    console.log(description(`Testando o método removeAt removendo o primeiro elemento da lista`));
    list.push(10);
    let node = list.removeAt(0);
    (node === null || node === void 0 ? void 0 : node.element) === 10 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
// FIXME: Separe essa função teste em duas, uma para testar o removeAt no meio da lista e a outra no final
function test_removeAt_Meio_Fim() {
    let list = new LinkedList();
    console.log(description(`Testando o método removeAt removendo um elemento no meio da lista`));
    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);
    let node_1 = list.removeAt(1);
    let node_2 = list.removeAt(2);
    (node_1 === null || node_1 === void 0 ? void 0 : node_1.element) === 20 && (node_2 === null || node_2 === void 0 ? void 0 : node_2.element) === 40 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_removeAt_undefined() {
    let list = new LinkedList();
    console.log(description(`Testando o método removeAt passando um index invalido`));
    list.push(10);
    list.push(20);
    list.push(30);
    let node = list.removeAt(15);
    (node === null || node === void 0 ? void 0 : node.element) === undefined ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Propósito: O médoto insert() insere um novo elemento em uma possição
  *   específica da lista passada como parâmetro, caso o index passado
  *   seja invalido o valor false será retornado, caso sejá possível
  *   valido o novo elemento será adicionado e o valor true será retornado
  *
  * Descrição:
  *   1. Na primeira função adicionaremos um elemento na primera posição
  *      da lista
  *   2. Na segunda função adicionaremos dois elementos na lista, um no
  *      meio dela e o outro no final da lista
  *   3. Na terceira função vamos passar um index inválido para testar o
  *      se o método retornará false
  *
*/
function test_insert_Head() {
    let list = new LinkedList();
    console.log(description(`Testando o método insert(), inserindo um elemento na primara posição`));
    list.insert(10, 0);
    let node = list.getElementAt(0);
    (node === null || node === void 0 ? void 0 : node.element) === 10 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
// FIXME: Separe essa função teste em duas, uma para testar o insert no meio da lista e a outra no final
function test_insert_Meio_Fim() {
    let list = new LinkedList();
    console.log(description(`Testando o método insert(), inserindo um elemento no meio e no final da lista`));
    list.push(10);
    list.push(20);
    list.push(40);
    list.insert(30, 2);
    list.insert(50, 4);
    let node_A = list.getElementAt(2);
    let node_B = list.getElementAt(4);
    (node_A === null || node_A === void 0 ? void 0 : node_A.element) === 30 && (node_B === null || node_B === void 0 ? void 0 : node_B.element) === 50 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_inser_undefined() {
    let list = new LinkedList();
    console.log(description(`Testando o método insert(), inserindo um elemento em uma posição inválida`));
    list.push(10);
    list.insert(20, 15) === false ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Propósito: O método indexOf retorna a posição do elemeto passado
  *   como parâmetro. Caso o elemento não exista será retornado -1
  *
  * Descrição:
  *   1. Na primeira função testaremos o indexOf com um valor que
  *   exista na lista
  *   2. Na segunda função testaremos o indexOf passando um valor
  *   que não tenha na lista, logo o método retornará -1
  *
*/
function test_indexOf_A() {
    let list = new LinkedList();
    console.log(description(`Testando o método indexOf(), passando um valor que tenha na lista`));
    list.push(10);
    list.push(20);
    list.push(30);
    list.indexOf(20) === 1 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_indexOf_B() {
    let list = new LinkedList();
    console.log(description(`Testando o método indexOf(), passando um valor que não tenha na lista`));
    list.push(10);
    list.push(20);
    list.push(30);
    list.indexOf(100) === -1 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Propósito: O método toString() retorna os valores da lista
  *   como  uma  string. Caso  a lista esteja vazia uma string
  *   vazia será retornada
  *
  * Descrição:
  *   1. A primeira função vai testar o método toString em uma
  *     lista preenchida com 3 elementos
  *   2. Na  segunda  função vamos testar o método toString em
  *     um lista vazia.
*/
function test_toString_A() {
    let list = new LinkedList();
    console.log(description(`Testando o método toString(), passando um lista preenchida`));
    list.push(10);
    list.push(20);
    list.push(30);
    let stringTest = '10, 20, 30';
    let listString = list.toString();
    stringTest === listString ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_toString_B() {
    let list = new LinkedList();
    console.log(description(`Testando o método toString(), passando um lista vazia`));
    let stringTest = '';
    let listString = list.toString();
    stringTest === listString ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
