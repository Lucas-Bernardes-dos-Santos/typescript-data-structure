export default class DoublyNode {
    constructor(element, previous = undefined, next = undefined) {
        this.element = element;
        this.previous = previous;
        this.next = next;
    }
}
