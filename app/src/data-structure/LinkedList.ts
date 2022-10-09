import { defaultEquals } from "../util/util.js"
import Node from "./Node.js"

export default class LinkedList<T> {
  protected count: number
  protected head: Node<T> | undefined

  constructor(protected equalsFn = defaultEquals) {
    this.count = 0
  }
}