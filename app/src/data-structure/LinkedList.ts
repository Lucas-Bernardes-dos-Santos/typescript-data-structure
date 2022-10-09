import { defaultEquals } from "../util/util.js"
import Node from "./models/Node.js"

export default class LinkedList<T> {
  protected count: number
  protected head: Node<T> | undefined

  constructor(protected equalsFn = defaultEquals) {
    this.count = 0
  }

  push(element: T): void {
    const node = new Node(element, undefined)

    if (this.head == null) 
      this.head = node
    else {
      let current = this.head

      // Pegando o último elemento da lista
      while (current.next != undefined)
        current = current.next

      // Atribuindo o novo nó ao next do último elemento
      current.next = node
    }

    this.count++
  }

  size(): Number {
    return this.count
  }
}