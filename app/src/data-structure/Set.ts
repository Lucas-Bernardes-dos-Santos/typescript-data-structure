export default class Set<T> {
  private items: any
  private count: number

  constructor() {
    this.items = {}
    this.count = 0
  }

  has(element: any): boolean {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  add(element: T): boolean {
    if(!this.has(element)) {
      this.items[element] = element
      this.count++
      return true
    }
    return false
  }

  delete(element: T): boolean {
    if(this.has(element)) {
      delete this.items[element]
      this.count--
      return true
    }
    return false
  }

  size(): number {
    return this.count
  }

  clear(): void {
    this.items = {}
  }

  values(): Array<T> {
    return Object.values(this.items)
  }
}