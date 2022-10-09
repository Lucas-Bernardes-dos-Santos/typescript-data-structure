import LinkedList from "../data-structure/LinkedList.js"
import { description, PASSED, FAILED } from "../util/test-util.js"

test_push_ListaVazia()
test_push_ListaCheia()


/*
  *
  * Propósito: A função push acrescenta um nove elemento
  *   no final da lista.
  * 
*/
function test_push_ListaVazia(): void {
  let list = new LinkedList<Number>()

  console.log(description(`Testando a função push() com a lista vazia`))

  list.push(10)

  list.size() === 1 ?
    console.log(PASSED(`\tTeste Result: Passed`)) :
    console.log(FAILED(`\tTeste Result: Failed`))
}

function test_push_ListaCheia(): void {
  let list = new LinkedList<Number>()

  console.log(description(`Testando a função push() com a lista preenchida`))

  list.push(10)
  list.push(20)
  list.push(30)

  list.size() === 3 ?
    console.log(PASSED(`\tTeste Result: Passed`)) :
    console.log(FAILED(`\tTeste Result: Failed`))
}