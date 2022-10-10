import { defaultEquals } from "../util/util.js"
import Node from "./models/Node.js"

export default class LinkedList<T> {
  private count: number
  private head: Node<T> | undefined

  constructor(private equalsFn = defaultEquals<T>) {
    this.count = 0
    this.head = undefined
  }

  // Private and Protected methods
  private checkIndex(index: number): boolean {
    return index >= 0 && index < this.count
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

  removeAt(index: number) {
    // Verificar se o index está dentro do intervalo
    if(this.checkIndex(index)) {
      let current = this.head
      
      if(index === 0) { // Remove o primeiro elemento
        this.head = current!.next
      } else {
        let previous = this.getElementAt(index - 1)! // Pegando o elemento anterior ao que será removido
        current = previous.next // Pegando o elemento que será removido
        previous.next = current?.next // Elemento anterior agora aponta para o elemento seguinte do que será removido
      }

      this.count--
      return current
    }
  }

  getElementAt(index: number): Node<T> | undefined {
    if(this.checkIndex(index)) {
      let node = this.head

      for(let i = 0; (i < index) && (node != null); i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  size(): Number {
    return this.count
  }
}