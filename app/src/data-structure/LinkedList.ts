import { defaultEquals } from "../util/util.js"
import Node from "./models/Node.js"

export default class LinkedList<T> {
  private count: number
  protected head: Node<T> | undefined

  constructor(private equalsFn = defaultEquals<T>) {
    this.count = 0
    this.head = undefined
  }

  // Private and Protected methods
  private checkIndex(index: number): boolean {
    return index >= 0 && index <= this.count
  }

  // Public methods
  public push(element: T): void {
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

  public insert(element: T, index: number): boolean {
    if(this.checkIndex(index)) {
      let node = new Node(element)
      if(index === 0) { // Inserir na primeira posição
        let current = this.head
        node.next = current
        this.head = node
      } else {
        let previous = this.getElementAt(index - 1) // Pegando um elemento antes da posição que o novo elemento será inserido
        let current = previous?.next // Elemento na posição que o novo elemento será inserido
        previous!.next = node
        node.next = current
      }
      this.count++
      return true
    }
    return false
  }

  public removeAt(index: number): Node<T> | undefined {
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
    return undefined
  }

  public getElementAt(index: number): Node<T> | undefined {
    if(this.checkIndex(index)) {
      let node = this.head

      for(let i = 0; (i < index) && (node != null); i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  public getHead(): Node<T> | undefined {
    return this.head
  }

  public indexOf(element: T): Number {
    let current = this.head

    for(let index = 0; index < this.count && current != null; index++) {
      if(this.equalsFn(element, current.element)) 
        return index;
      current = current?.next
    }

    return -1
  }

  public size(): Number {
    return this.count
  }
}