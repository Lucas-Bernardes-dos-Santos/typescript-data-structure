export default class Queue {
    constructor() {
        this.count = 0;
        this.first = 0;
        this.item = {};
    }
    enqueue(element) {
        this.item[this.count] = element;
        this.count++;
    }
    size() {
        return this.count - this.first;
    }
}
