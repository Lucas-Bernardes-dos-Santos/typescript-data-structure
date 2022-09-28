export default class Deque<T> {

  private count: number
  private first: number
  private items: any

  constructor() {
    this.count = 0
    this.first = 0
    this.items = {}
  }

  addFront(element: T): void {
    if(this.isEmpty())
      this.addBack(element)
    else {
      this.first--
      this.items[this.first] = element
    }
  }

  addBack(element: T): void {
    this.items[this.count] = element
    this.count++
  }

  peekBack(): T | undefined {
    if(this.isEmpty())
      return undefined
    return this.items[this.count - 1]
  }

  peekFront(): T | undefined {
    if(this.isEmpty())
      return undefined
    return this.items[this.first]
  }

  size(): number {
    return this.count - this.first
  }

  isEmpty(): boolean {
    return this.size() === 0
  }
}