import { defaultToString } from "../util/util.js"
import { ValuePair } from "./models/ValuePair.js"

export default class Dictionary<K, V> {
  private table: {
    [Key: string]: ValuePair<K, V>
  }

  constructor(private toStrFn: (Key: K) => string = defaultToString) {
    this.table = {}
  }

  set(key: K, value: V): boolean {
    if (key != null && value != null) {
      let tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }

  hasKey(key: K): boolean {
    return this.table[this.toStrFn(key)] != null
  }  

  remove(key: K): boolean {
    if(this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }

  get(key: K): V | false {
    if(this.hasKey(key)) {
      let valuePair = this.table[this.toStrFn(key)]
    return valuePair.value
    }
    return false
  }

  keyValues(): Array<ValuePair<K, V>> {
    return Object.values(this.table)
  }

  keys(): Array<K> {
    return this.keyValues().map(keyValues => keyValues.key)
  }

  values(): Array<V> {
    return this.keyValues().map(keyValues => keyValues.value)
  }

  size(): number {
    return this.keys().length
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  clear(): void {
    this.table = {}
  }

  toString(): string {
    if(this.isEmpty()) {
      return ''
    }
    let valuePairs = this.keyValues()
    let objString = `${valuePairs[0].toString()}`

    for(let i = 1; i < valuePairs.length; i++) {
      objString = `${objString}, ${valuePairs[i].toString()}`
    }

    return objString
  }
}