export default class Stack<T> {
  private count: number
  private items: any

  constructor() {
    this.count = 0
    this.items = {}
  }

  push(element: T): void {
    this.items[this.count] = element
    this.count++
  }

  size(): number {
    return this.count
  }

  isEmpty(): boolean {
    return this.count === 0
  }

  pop() {
    if(this.isEmpty())
      return undefined
    
    this.count--
    const itemRemoved = this.items[this.count]
    delete this.items[this.count]
    return itemRemoved
  }

  peek() {
    if(this.isEmpty())
      return undefined
    return this.items[this.count - 1]
  }

  clear() {
    while(!this.isEmpty()) {
      this.pop()
    }
  }

  toString(): string {
    if(this.isEmpty())
      return ''
    
    let objString = `${this.items[0]}`
    for(let i = 1; i < this.size(); i++) {
      objString = `${objString}, ${this.items[i]}`
    }

    return objString
  }
}