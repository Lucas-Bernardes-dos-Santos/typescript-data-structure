import chalk from "chalk";
import { Persons } from "./models/Person.js";
import { defaultEquals, defaultToString } from "../util/util.js";
import { description } from "../util/test-util.js";
test_defaultEquals_Variaveis_True();
test_defaultEquals_Variaveis_False();
test_defaultEquals_Objetos_True();
test_defaultEquals_Objetos_False();
test_defaultToString_A();
// TODO: Melhorar a descrição dos testes da função defaultEquals
/*
  *
  * Propósito: Comprar a função defaultEqual enviando variaveis para ela
  *
  * A primeira função testará se o retorno será verdadeiro
  *   e a segunda função testará o retorno false
  *
*/
function test_defaultEquals_Variaveis_True() {
    console.log(description("Testando a função defaultEquals(): Enviando valores iguais"));
    defaultEquals(10, 10) === true ?
        console.log(`\t${chalk.green('Test Result: Passed')}`) :
        console.log(`\t${chalk.red('Test Resuld: Failed')}`);
}
function test_defaultEquals_Variaveis_False() {
    console.log(description("Testando a função defaultEquals(): Enviando valores diferentes"));
    defaultEquals(10, 5) === false ?
        console.log(`\t${chalk.green('Test Result: Passed')}`) :
        console.log(`\t${chalk.red('Test Resuld: Failed')}`);
}
function test_defaultEquals_Objetos_True() {
    let pessoa_A = { name: 'Lucas', age: 25 };
    let pessoa_B = { name: 'Lucas', age: 25 };
    console.log(description(`Testando a função defaultEquals: Enviando dois objetos iguais`));
    defaultEquals(pessoa_A, pessoa_B) === true ?
        console.log(`\t${chalk.green('Test Result: Passed')}`) :
        console.log(`\t${chalk.red('Test Resuld: Failed')}`);
}
function test_defaultEquals_Objetos_False() {
    console.log(description(`Testando a função defaultEquals: Enviando dois objetos diferentes`));
    let pessoa_A = { name: 'Lucas', age: 25 };
    let pessoa_B = { name: 'Lucas', age: 10 };
    defaultEquals(pessoa_A, pessoa_B) === false ?
        console.log(`\t${chalk.green('Test Result: Passed')}`) :
        console.log(`\t${chalk.red('Test Resuld: Failed')}`);
}
function test_defaultToString_A() {
    console.log(description(`Testando a função defaultToString():`));
    let person_A = new Persons('Lucas Bernardes', 26);
    defaultToString(person_A) === 'Lucas Bernardes - 26' ?
        console.log(`\t${chalk.green('Test Result: Passed')}`) :
        console.log(`\t${chalk.red('Test Resuld: Failed')}`);
}
