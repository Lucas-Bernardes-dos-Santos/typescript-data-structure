import LinkedList from "../data-structure/LinkedList.js";
import { description, PASSED, FAILED } from "../util/test-util.js";
test_push_ListaVazia();
test_push_ListaCheia();
test_removeAt_Head();
test_removeAt_Meio();
teste_removeAt_undefined();
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
    node.element === 10 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_removeAt_Meio() {
    let list = new LinkedList();
    console.log(description(`Testando o método removeAt removendo um elemento no meio da lista`));
    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);
    let node_1 = list.removeAt(1);
    let node_2 = list.removeAt(2);
    node_1.element === 20 && node_2.element === 40 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function teste_removeAt_undefined() {
    let list = new LinkedList();
    console.log(description(`Testando o método removeAt passando um index invalido`));
    list.push(10);
    list.push(20);
    list.push(30);
    let node = list.getElementAt(15);
    (node === null || node === void 0 ? void 0 : node.element) === undefined ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
