import { defaultToString } from "../util/util.js";
import { ValuePair } from "./models/ValuePair.js";
export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    set(key, value) {
        if (key != null && value != null) {
            let tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }
    get(key) {
        if (this.hasKey(key)) {
            let valuePair = this.table[this.toStrFn(key)];
            return valuePair.value;
        }
        return false;
    }
    keyValues() {
        return Object.values(this.table);
    }
    keys() {
        return this.keyValues().map(keyValues => keyValues.key);
    }
    values() {
        return this.keyValues().map(keyValues => keyValues.value);
    }
    size() {
        return this.keys().length;
    }
    isEmpty() {
        return this.size() === 0;
    }
    clear() {
        this.table = {};
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString}, ${valuePairs[i].toString()}`;
        }
        return objString;
    }
}
