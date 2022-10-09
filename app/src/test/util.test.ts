import chalk from "chalk"
import { defaultEquals } from "../util/util.js"
import { description } from "../util/test-util.js"

test_defaultEquals_Variaveis_True()
test_defaultEquals_Variaveis_False()
test_defaultEquals_Objetos_True()
test_defaultEquals_Objetos_False()

/*
  *
  * Propósito: Comprar a função defaultEqual enviando variaveis para ela
  * 
  * A primeira função testará se o retorno será verdadeiro
  *   e a segunda função testará o retorno false
  * 
*/
function test_defaultEquals_Variaveis_True(): void {
  console.log(description("Testando a função defaultEquals(): Enviando valores iguais"))

  defaultEquals<Number>(10, 10) === true ? 
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`) 
}

function test_defaultEquals_Variaveis_False(): void {
  console.log(description("Testando a função defaultEquals(): Enviando valores diferentes"))

  defaultEquals<Number>(10, 5) === false ? 
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`) 
}

/*
  *
  * Propósito: Testar a função defaultEqual enviando objetos para ela
  * 
  * A primeira função testará se o retorno será verdadeiro
  *   e a segunda função testará o retorno false
  * 
*/
interface Person {
  name: string
  age: number
}

function test_defaultEquals_Objetos_True(): void {
  let pessoa_A = {name: 'Lucas', age: 25}
  let pessoa_B = {name: 'Lucas', age: 25}

  console.log(description(`Testando a função defaultEquals: Enviando dois objetos iguais`))

  defaultEquals<Person>(pessoa_A, pessoa_B) === true ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`)
}

function test_defaultEquals_Objetos_False(): void {
  console.log(description(`Testando a função defaultEquals: Enviando dois objetos diferentes`))

  let pessoa_A = {name: 'Lucas', age: 25}
  let pessoa_B = {name: 'Lucas', age: 10}

  defaultEquals<Person>(pessoa_A, pessoa_B) === false ?
    console.log(`\t${chalk.green('Test Result: Passed')}`) : 
    console.log(`\t${chalk.red('Test Resuld: Failed')}`) 
}