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
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.item[this.first];
        delete this.item[this.first];
        this.first++;
        return result;
    }
    isEmpty() {
        return this.size() === 0;
    }
    clear() {
        while (!this.isEmpty()) {
            this.dequeue();
        }
    }
}
