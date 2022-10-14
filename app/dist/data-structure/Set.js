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
}
