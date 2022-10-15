export default class Set {
    constructor() {
        this.items = {};
        this.count = 0;
    }
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            this.count++;
            return true;
        }
        return false;
    }
    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            this.count--;
            return true;
        }
        return false;
    }
    size() {
        return this.count;
    }
    clear() {
        this.items = {};
    }
    values() {
        return Object.values(this.items);
    }
    union(set) {
        let unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        set.values().forEach(value => unionSet.add(value)); // Adicionando os elementos do conjunto recebido como parâmetro no conjunto unionSet
        return unionSet;
    }
    intersection(set) {
        let intersectionSet = new Set();
        let biggerSet = set.values();
        let smallerSet = this.values();
        // Verificando qual é o maior conjunto
        if (biggerSet.length < smallerSet.length) {
            biggerSet = this.values();
            smallerSet = set.values();
        }
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }
    difference(set) {
        let differenceSet = new Set();
        this.values().forEach(value => {
            if (!set.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }
    isSubsetOf(set) {
        if (this.size() > set.size()) {
            return false;
        }
        let isSubset = true;
        this.values().forEach(value => {
            if (!set.has(value))
                isSubset = false;
        });
        return isSubset;
    }
}
