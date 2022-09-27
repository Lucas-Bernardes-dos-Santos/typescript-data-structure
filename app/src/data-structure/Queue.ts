export default class Queue<T> {
  private count: number
  private first: number
  private item: any

  constructor() {
    this.count = 0
    this.first = 0
    this.item = {}
  }

  enqueue(element: T): void {
    this.item[this.count] = element
    this.count++
  }

  size(): number {
    return this.count - this.first
  }
}