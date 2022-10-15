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

  union(set: Set<T>): Set<T> {
    let unionSet = new Set<T>()

    this.values().forEach(value => unionSet.add(value)) 

    set.values().forEach(value => unionSet.add(value)) // Adicionando os elementos do conjunto recebido como parâmetro no conjunto unionSet

    return unionSet
  }

  intersection(set: Set<T>): Set<T> {
    let intersectionSet = new Set<T>()
     
    let biggerSet = set.values()
    let smallerSet = this.values()

    // Verificando qual é o maior conjunto
    if(biggerSet.length < smallerSet.length) {
      biggerSet = this.values()
      smallerSet = set.values()
    }

    smallerSet.forEach(value => {
      if(biggerSet.includes(value)) {
        intersectionSet.add(value)
      }
    })

    return intersectionSet
  }

  difference(set: Set<T>): Set<T> {
    let differenceSet = new Set<T>()

    this.values().forEach(value => {
      if(!set.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet
  }

  isSubsetOf(set: Set<T>): boolean {
    if(this.size() > set.size()) {
      return false
    }
    let isSubset = true
    
    this.values().forEach(value => {
      if(!set.has(value))
        isSubset = false
    })
    return isSubset
  }
}