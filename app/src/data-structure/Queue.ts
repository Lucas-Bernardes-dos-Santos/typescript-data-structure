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

  dequeue(): T | undefined{
    if(this.isEmpty()) {
      return undefined
    }

    const result = this.item[this.first]
    delete this.item[this.first]
    this.first++

    return result
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  clear(): void {
    while(!this.isEmpty()) {
      this.dequeue()
    }
  }

  peek(): T | undefined {
    if(this.isEmpty())
      return undefined
    return this.item[this.first]
  }

  toString(): string | undefined{
    if(this.isEmpty()) 
      return undefined
    
      let objString = `${this.item[this.first]}`
      for(let i = this.first + 1; i < this.count; i++) {
        objString = `${objString}, ${this.item[i]}`
      }
    return objString
  }
}