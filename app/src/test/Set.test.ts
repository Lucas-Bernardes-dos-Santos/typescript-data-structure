import Set from "../data-structure/Set.js"
import { description, PASSED, FAILED } from "../util/test-util.js"
import { defaultEquals } from "../util/util.js"

test_add_A()
test_add_B()

test_has_A()
test_has_B()

test_delete_A()
test_delete_B()

test_values_A()

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
function test_add_A(): void {
  console.log(description(`Testando o método add(), adicionando dois elementos não repetidos no conjunto:`))

  let set = new Set<string>()

  set.add('A')
  
  set.add('Z') === true ?
    console.log(PASSED(`\tTeste Result: Passed`)) :
    console.log(FAILED(`\tTeste Result: Failed`))   
}
function test_add_B(): void {
  console.log(description(`Testando o método add(), um elemento repetido no conjunto:`))

  let set = new Set<string>()

  set.add('A')
  set.add('Z')
  
  set.add('Z') === false ?
    console.log(PASSED(`\tTeste Result: Passed`)) :
    console.log(FAILED(`\tTeste Result: Failed`))   
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
function test_has_A(): void {
  console.log(description(`Testando o método has(), passando um elemento não repetido:`))

  let set = new Set<string>()

  set.add('A')
  set.add('Z')
  
  set.has('Y') === false ?
    console.log(PASSED(`\tTeste Result: Passed`)) :
    console.log(FAILED(`\tTeste Result: Failed`))   
}
function test_has_B(): void {
  console.log(description(`Testando o método has(), passando um elemento já existente no conjunto:`))

  let set = new Set<string>()

  set.add('A')
  set.add('Z')
  
  set.has('A') === true ?
    console.log(PASSED(`\tTeste Result: Passed`)) :
    console.log(FAILED(`\tTeste Result: Failed`))   
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
function test_delete_A(): void {
  console.log(description(`Testando o método delete(), passando um elemento já existente no conjunto:`))

  let set = new Set<string>()

  set.add('A')
  set.add('Z')
  
  set.delete('A') === true &&
  set.size() === 1 ?
    console.log(PASSED(`\tTeste Result: Passed`)) :
    console.log(FAILED(`\tTeste Result: Failed`))
}
function test_delete_B(): void {
  console.log(description(`Testando o método delete(), passando um elemento não existente no conjunto:`))

  let set = new Set<string>()

  set.add('A')
  set.add('Z')
  
  set.delete('X') === false &&
  set.size() === 2 ?
    console.log(PASSED(`\tTeste Result: Passed`)) :
    console.log(FAILED(`\tTeste Result: Failed`))
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
function test_values_A(): void {
  console.log(description(`Testando o método values():`))

  let set = new Set<string>()

  set.add('A')
  set.add('Z')

  defaultEquals(set.values(), ['A', 'Z']) && 
  set.size() === 2 ?
    console.log(PASSED(`\tTeste Result: Passed`)) :
    console.log(FAILED(`\tTeste Result: Failed`))
}