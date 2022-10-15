import Set from "../data-structure/Set.js";
import { description, PASSED, FAILED } from "../util/test-util.js";
import { defaultEquals } from "../util/util.js";
test_add_A();
test_add_B();
test_has_A();
test_has_B();
test_delete_A();
test_delete_B();
test_values_A();
test_unio_A();
test_intersection_A();
test_difference_A();
test_isSubsetOf_A();
test_isSubsetOf_B();
test_isSubsetOf_C();
/*
  *
  * Função: O método add adiciona um novo elemento
  *   no  conjunto,  caso  esse  elemento não seja
  *   repetido,  caso  já  haja  um elemento igual
  *   o   método  retornara  false,  do  contrário
  *   retornará true.
  *
  * Descrição:
  *   1. A função A testará adicionar dois elementos
  *     não repetido em uma lista.
  *   2. A  função  B  testará adicionar um elemento
  *     repetido para testar o return false.
  *
*/
function test_add_A() {
    console.log(description(`Testando o método add(), adicionando dois elementos não repetidos no conjunto:`));
    let set = new Set();
    set.add('A');
    set.add('Z') === true ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_add_B() {
    console.log(description(`Testando o método add(), um elemento repetido no conjunto:`));
    let set = new Set();
    set.add('A');
    set.add('Z');
    set.add('Z') === false ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método has() verificar se um elemento
  *   passado  como argumento já existe no conjunto
  *   retornando  true caso exista e false caso não.
  *
  * Descrição:
  *   1. A função A passará como argumento um elemento
  *     que não exista no conjunto.
  *   2. A função B passará como argumento um elemento
  *     que já exista no conjunto.
  *
*/
function test_has_A() {
    console.log(description(`Testando o método has(), passando um elemento não repetido:`));
    let set = new Set();
    set.add('A');
    set.add('Z');
    set.has('Y') === false ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_has_B() {
    console.log(description(`Testando o método has(), passando um elemento já existente no conjunto:`));
    let set = new Set();
    set.add('A');
    set.add('Z');
    set.has('A') === true ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método delete remove um elemento
  *   do  conjunto  e  retorna  true,  caso  o
  *   elemento não exista é retornado false.
  *
  * Descrição:
  *   1. A função A vai testar a remoção de um
  *     elemento existente no conjunto.
  *   2. A  função  B  testará a remoção de um
  *     elemento que não existe no conjunto.
  *
*/
function test_delete_A() {
    console.log(description(`Testando o método delete(), passando um elemento já existente no conjunto:`));
    let set = new Set();
    set.add('A');
    set.add('Z');
    set.delete('A') === true &&
        set.size() === 1 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_delete_B() {
    console.log(description(`Testando o método delete(), passando um elemento não existente no conjunto:`));
    let set = new Set();
    set.add('A');
    set.add('Z');
    set.delete('X') === false &&
        set.size() === 2 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método values retorna um array
  *   com todos os elementos do conjunto
  *
  * Descrição:
  *   1. A  função  A  vai chamar o método e
  *     testará  chamando o método size para
  *     verificar  se  a  quantidade retornar
  *     está correta.
  *
*/
function test_values_A() {
    console.log(description(`Testando o método values():`));
    let set = new Set();
    set.add('A');
    set.add('Z');
    defaultEquals(set.values(), ['A', 'Z']) &&
        set.size() === 2 ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método union() recebe como parâmetro um
  *   conjunto  e  retornar  a  união  desse conjunto
  *   recebido  com  os elementos da instância atual.
  *   A junção dos dois conjuntos começa a partir dos
  *   elementos   da   instância   atual  e  depos  é
  *   adicionado os elementos do conjunto enviado como
  *   parâmetro.
  *
  * Descrição:
  *   1. A função A vai criar dois conjuntos, cada um
  *     preenchida  3 elementos, dessa forma o método
  *     union  deverá  retornar um conjunto com todos
  *     os elementos do conjunto A e do conjunto B.
  *     Caso  haja elementos iguais em ambos os apenas
  *     uma  cópia  será  adiciona  ao  novo conjunto.
  *     Por  exemplo,  conjunto  A(1, 2, 3) e conjunto
  *     B(3, 4, 5)  o  conjunto  retornado  do  método
  *     union  será  (1, 2, 3, 4, 5)  o elemento 3 não
  *     se repetirá.
  *
*/
function test_unio_A() {
    console.log(description(`Testando o método union():`));
    let set_A = new Set();
    let set_B = new Set();
    set_A.add('A');
    set_A.add('C');
    set_A.add('E');
    set_B.add('A');
    set_B.add('D');
    set_B.add('G');
    let set_AB = set_A.union(set_B);
    set_AB.size() === 5 &&
        defaultEquals(set_AB.values(), ['A', 'C', 'E', 'D', 'G']) ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método intersection recebe um conjunto
  *   como  parâmetro  e  retorna  um  novo conjunto
  *   contendo todos os elementos que estão tanto na
  *   instância atual quanto conjunto enviado.
  *   Novamente   parâmetros   repetidos   só  serão
  *   adicionados uma única vez.
  *
  * Descrição:
  *   1. A função A vai criar dois conjuntos A e B,
  *     A  (A, B, C, D) e B (B, C, D, E) desse modo
  *     o  método  intersection  deverá retornar um
  *     novo conjunto com os elementos (B, C, D).
  *
*/
function test_intersection_A() {
    console.log(description(`Testando o método intersection():`));
    let set_A = new Set();
    let set_B = new Set();
    set_A.add('A');
    set_A.add('B');
    set_A.add('C');
    set_A.add('D');
    set_B.add('B');
    set_B.add('C');
    set_B.add('D');
    set_B.add('E');
    let set_AB = set_A.intersection(set_B);
    set_AB.size() === 3 &&
        defaultEquals(set_AB.values(), ['B', 'C', 'D']) ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método difference retorna a diferença
  *   entre dois conjuntos, ou seja, retornar todos
  *   os  elementos  da  instância  que  não  estão
  *   contidos no conjunto passado como parâmetro.
  *
  * Descrição:
  *   1. A função A vai testar o método difference
  *     criando  os  conjuntos A(A, B, C, D) e B(C,
  *     D, E, F)  e  usando  o  método  difference
  *     apartir  da  instância  A,  devendo  então
  *     retornar o conjunto (A, B).
  *
*/
function test_difference_A() {
    console.log(description(`Testando o método difference():`));
    let set_A = new Set();
    let set_B = new Set();
    set_A.add('A');
    set_A.add('B');
    set_A.add('C');
    set_A.add('D');
    set_B.add('C');
    set_B.add('D');
    set_B.add('E');
    set_B.add('F');
    let set_AB = set_A.difference(set_B);
    set_AB.size() === 2 &&
        defaultEquals(set_AB.values(), ['A', 'B']) ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
/*
  *
  * Função: O método isSubsetOf verifica se o conjunto
  *   instânciado é um subconjunto do conjunto enviado
  *   como parâmetro a ele.
  *
  * Descrição:
  *   1. A  função  A  vai  testar o método isSubsetOf
  *     enviando  um  conjunto  menor  como  parâmetro
  *     para  o  conjunto  instânciado,  devendo assim
  *     retornar false.
  *   2. A   função  B  vai  testar  enviando  para  o
  *     conjunto  instânciado  um  conjunto  diferente
  *     do conjunto instância, devendo retornar false.
  *   3. A função C vai testar o retorno verdadeiro da
  *     função, fazendo com que o conjunto instânciado
  *     de fato seja um subconjunto do conjunto enviado.
  *
*/
function test_isSubsetOf_A() {
    console.log(description(`Testando o método isSubsetOf(), enviando um conjunto menor do que o conjunto instânciado: `));
    let set_A = new Set();
    let set_B = new Set();
    set_A.add('A');
    set_A.add('B');
    set_A.add('C');
    set_A.add('D');
    set_B.add('C');
    set_B.add('D');
    set_A.isSubsetOf(set_B) === false ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_isSubsetOf_B() {
    console.log(description(`Testando o método isSubsetOf(), enviando um conjunto diferente do conjunto instânciado: `));
    let set_A = new Set();
    let set_B = new Set();
    set_A.add('A');
    set_A.add('B');
    set_A.add('C');
    set_A.add('D');
    set_B.add('C');
    set_B.add('D');
    set_B.add('E');
    set_B.add('F');
    set_A.isSubsetOf(set_B) === false ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
function test_isSubsetOf_C() {
    console.log(description(`Testando o método isSubsetOf(), enviando um conjunto que engloba o conjunto instânciado: `));
    let set_A = new Set();
    let set_B = new Set();
    set_A.add('A');
    set_A.add('B');
    set_B.add('A');
    set_B.add('B');
    set_B.add('C');
    set_B.add('D');
    set_A.isSubsetOf(set_B) === true ?
        console.log(PASSED(`\tTeste Result: Passed`)) :
        console.log(FAILED(`\tTeste Result: Failed`));
}
