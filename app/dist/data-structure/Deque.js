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
    peekBack() {
        if (this.isEmpty())
            return undefined;
        return this.items[this.count - 1];
    }
    peekFront() {
        if (this.isEmpty())
            return undefined;
        return this.items[this.first];
    }
    size() {
        return this.count - this.first;
    }
    isEmpty() {
        return this.size() === 0;
    }
}
