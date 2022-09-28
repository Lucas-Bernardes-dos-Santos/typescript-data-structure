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

  removeFront(): T | undefined {
    if(this.isEmpty())
      return undefined

    let element_removed = this.items[this.first]
    delete this.items[this.first]
    this.first++
    return element_removed
  }

  removeBack(): T | undefined {
    if(this.isEmpty())
      return undefined

    this.count--
    let element_removed = this.items[this.count]
    delete this.items[this.count]

    return element_removed
  }

  peekFront(): T | undefined {
    if(this.isEmpty())
      return undefined
    return this.items[this.first]
  }

  peekBack(): T | undefined {
    if(this.isEmpty())
      return undefined
    return this.items[this.count - 1]
  }

  size(): number {
    return this.count - this.first
  }

  isEmpty(): boolean {
    return this.size() === 0
  }
}