import Dictionary from "../data-structure/Dictionary.js";
import { defaultEquals } from "../util/util.js";
import { description, PASSED, FAILED } from "../util/test-util.js";
test_set_A();
test_set_B();
test_hasKey_A();
test_hasKey_B();
test_remove_A();
test_remove_B();
test_get_A();
test_get_B();
test_keyValues_A();
test_keys_A();
test_values_A();
test_size_A();
test_isEmpty_A();
test_isEmpty_B();
test_clear_A();
test_toString_A();
test_toString_B();
/*
  *
  * Função: O método set() adiciona um novo elemento
  *   no  dicionário  e retorna true, caso já exista
  *   uma  chave igual a do elemento passado, o novo
  *   elemento  irá  substituir o elemento  anterior,
  *   caso  seja passado para key e value os valores
  *   null ou undefinet o método retornará false.
  *
  * Descrição:
  *   1. A função A vai testar adicionando apenas um
  *     elemento no dicionário.
  *   2. A  função  B  vai  testar  adicionando dois
  *     elementos ao dicionário, sendo que o segundo
  *     irá substituir o terceiro.
  *
*/
function test_set_A() {
    console.log(description(`Testando o método set(), adicionando um elemento ao dicionário:`));
    let dictionary = new Dictionary();
    dictionary.set(0, 'Maça');
    dictionary.hasKey(0) === true &&
        dictionary.get(0) === 'Maça' ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_set_B() {
    console.log(description(`Testando o método set(), atualizando um elemento da lista:`));
    let dictionary = new Dictionary();
    dictionary.set(0, 'Maça');
    dictionary.set(0, 'Uva');
    dictionary.hasKey(0) === true &&
        dictionary.get(0) === 'Uva' ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método hasKey() verifica se a key
  *   enviada como parâmetro tem na estrutura.
  *
  * Descrição:
  *   1. Na função A um dicionário será criado
  *     e  testaremoso método passando uma key
  *     valida.  O  que  deverá  resultar  num
  *     retorno true.
  *   1. Na função B um dicionário será criado
  *     e testaremos o método passando uma key
  *     inválida, resultando num retorno false.
  *
*/
function test_hasKey_A() {
    console.log(description(`Testando o método hasKey(), passando uma key válida:`));
    let dictionary = new Dictionary();
    dictionary.set(0, 'Melancia');
    dictionary.hasKey(0) === true ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_hasKey_B() {
    console.log(description(`Testando o método hasKey(), passando uma key inválida:`));
    let dictionary = new Dictionary();
    dictionary.set(0, 'Melancia');
    dictionary.hasKey(2) === false ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método remove(), como o nome diz, tem a
  *   função de remover um elemento do dicionário.
  *   Caso  o elemento existe o método retornará true
  *   do contrário retornará false.
  *
  * Descrição:
  *   1. A função A testará o retorno true do método.
  *   1. A função B testará o retorno false do método.
  *
*/
function test_remove_A() {
    console.log(description(`Testando o método remove(), passando uma key existente:`));
    let dictionary = new Dictionary();
    dictionary.set(0, 'Melancia');
    dictionary.set(1, 'Pera');
    dictionary.set(2, 'Uva');
    dictionary.remove(1) === true &&
        dictionary.get(1) === false ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_remove_B() {
    console.log(description(`Testando o método remove(), passando uma key inexistente:`));
    let dictionary = new Dictionary();
    dictionary.set(0, 'Melancia');
    dictionary.set(1, 'Pera');
    dictionary.set(2, 'Uva');
    dictionary.remove(5) === false ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método get() retornar o valor de um elemento
  *   no  dicionário,  caso  ele  exista, do contrário ele
  *   retornará false.
  *
  * Descrição:
  *   1. A  função a testará o método passando uma key que
  *     exista no dicionário.
  *   2. A  função B passsará uma key inválida, retornando
  *     false.
  *
*/
function test_get_A() {
    console.log(description(`Testando o método get(), passando uma key existente:`));
    let dictionary = new Dictionary();
    dictionary.set(0, 'Melancia');
    dictionary.set(1, 'Pera');
    dictionary.set(2, 'Uva');
    dictionary.get(1) === 'Pera' ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_get_B() {
    console.log(description(`Testando o método get(), passando uma key inexistente:`));
    let dictionary = new Dictionary();
    dictionary.set(0, 'Melancia');
    dictionary.set(1, 'Pera');
    dictionary.set(2, 'Uva');
    dictionary.remove(5) === false ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método keyValues() retornar todos os valores dos elementos
  *   do dicionário em um array.
  *
  * Descrição:
  *   1. A função A vai testar se o retorno do método está correto
  *
*/
function test_keyValues_A() {
    console.log(description(`Testando o método keyValues():`));
    let dictionary = new Dictionary();
    dictionary.set(0, 'Melancia');
    dictionary.set(1, 'Pera');
    dictionary.set(2, 'Uva');
    let arrayKeyValues = dictionary.keyValues();
    defaultEquals(arrayKeyValues[0], { key: 0, value: 'Melancia' }) === true &&
        defaultEquals(arrayKeyValues[1], { key: 1, value: 'Pera' }) === true &&
        defaultEquals(arrayKeyValues[2], { key: 2, value: 'Uva' }) === true ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método keys() retornar os valores de todas as chaves
  *   armazenadas no dicionário.
  *
  * Descrição: A função A vai testar chamar o métodos key e testar
  *   se os valores do array retornados estão corretos
  *
*/
function test_keys_A() {
    console.log(description(`Testando o método keys():`));
    let dictionary = new Dictionary();
    dictionary.set(0, 'Melancia');
    dictionary.set(1, 'Pera');
    dictionary.set(2, 'Uva');
    defaultEquals(dictionary.keys(), [0, 1, 2]) ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método values() retorna um array com todos os valores
  *   dos elementos do dicionário
  *
  * Descrição: A função A vai testar chamar o métodos values e testar
  *   se os valores do array retornados estão corretos
  *
*/
function test_values_A() {
    console.log(description(`Testando o método values():`));
    let dictionary = new Dictionary();
    dictionary.set(0, 'Melancia');
    dictionary.set(1, 'Pera');
    dictionary.set(2, 'Uva');
    defaultEquals(dictionary.values(), ['Melancia', 'Pera', 'Uva']) ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método size() retornar a quantida de elementos dentro
  *   do dicionário.
  *
  * Descrição:
  *   1. A função A vai testar se o valor retornado está correto.
  *
*/
function test_size_A() {
    console.log(description(`Testando o método size():`));
    let dictionary = new Dictionary();
    dictionary.set(0, 'Melancia');
    dictionary.set(1, 'Pera');
    dictionary.set(2, 'Uva');
    dictionary.size() === 3 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método isEmpty retorna true caso o dicionário esteja
  *   vazio e false caso o contrário.
  *
  * Descrição:
  *   1. A função A vai testar chamar o método isEmpty em através
  *     de um dicionário preenchido, retornando false.
  *   2. A função B vai testar chamar o método isEmpty em através
  *     de um dicionário vazio, retornando true.
  *
*/
function test_isEmpty_A() {
    console.log(description(`Testando o método isEmpty(), usando um dicionário preenchido:`));
    let dictionary = new Dictionary();
    dictionary.set(0, 'Melancia');
    dictionary.set(1, 'Pera');
    dictionary.set(2, 'Uva');
    dictionary.isEmpty() === false ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_isEmpty_B() {
    console.log(description(`Testando o método isEmpty(), usando um dicionário vazio:`));
    let dictionary = new Dictionary();
    dictionary.isEmpty() === true ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método clear limpa toda a estrutura dicionário
  *
  * Descrição:
  *   1. A função A vai testar o método clear no dicionário
  *     já preenchido
  *
*/
function test_clear_A() {
    console.log(description(`Testando o método clear(), usando um dicionário preenchido:`));
    let dictionary = new Dictionary();
    dictionary.set(0, 'Melancia');
    dictionary.set(1, 'Pera');
    dictionary.set(2, 'Uva');
    dictionary.clear();
    dictionary.isEmpty() === true ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método toString() retorna todos os elementos do dicionário
  *   em formato de string.
  *
  * Descrição:
  *   1. A função A vai testar o método usando um dicionário preenchido.
  *   2. A função B vai testar o método usando um dicionário vazia, que
  *     vai resulta no retorno de uma string vazia.
  *
*/
function test_toString_A() {
    console.log(description(`Testando o método toString(), usando um dicionário preenchido:`));
    let dictionary = new Dictionary();
    dictionary.set(0, 'Melancia');
    dictionary.set(1, 'Pera');
    dictionary.set(2, 'Uva');
    dictionary.toString() === '[#0: Melancia], [#1: Pera], [#2: Uva]' ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_toString_B() {
    console.log(description(`Testando o método toString(), usando um dicionário vazio:`));
    let dictionary = new Dictionary();
    dictionary.toString() === '' ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
