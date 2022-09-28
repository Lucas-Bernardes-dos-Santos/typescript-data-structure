export default class Deque {
    constructor() {
        this.count = 0;
        this.first = 0;
        this.items = {};
    }
    addFront(element) {
        if (this.isEmpty())
            this.addBack(element);
        else {
            this.first--;
            this.items[this.first] = element;
        }
    }
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
    removeFront() {
        if (this.isEmpty())
            return undefined;
        let element_removed = this.items[this.first];
        delete this.items[this.first];
        this.first++;
        return element_removed;
    }
    removeBack() {
        if (this.isEmpty())
            return undefined;
        this.count--;
        let element_removed = this.items[this.count];
        delete this.items[this.count];
        return element_removed;
    }
    peekFront() {
        if (this.isEmpty())
            return undefined;
        return this.items[this.first];
    }
    peekBack() {
        if (this.isEmpty())
            return undefined;
        return this.items[this.count - 1];
    }
    size() {
        return this.count - this.first;
    }
    isEmpty() {
        return this.size() === 0;
    }
}
