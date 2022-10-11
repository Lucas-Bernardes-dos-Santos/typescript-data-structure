import { defaultEquals } from "../util/util.js"
import DoublyNode from "./models/DoublyNode.js"

export default class DoublyLinkedList<T> {
  private count: number
  protected head: DoublyNode<T> | undefined
  protected tail: DoublyNode<T> | undefined

  constructor(protected equalsFn = defaultEquals<T>) {
    this.count = 0
    this.head = undefined
    this.tail = undefined
  }

  
}