import { defaultToString } from "../util/util.js"
import { ValuePair } from "./models/ValuePair.js"

export default class Dictionary<K, V> {
  private table: {
    [Key: string]: ValuePair<K, V>
  }

  constructor(private toStrFn: (Key: K) => string = defaultToString) {
    this.table = {}
  }
}