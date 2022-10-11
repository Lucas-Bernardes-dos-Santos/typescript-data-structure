import { defaultEquals } from "../util/util.js";
export default class DoublyLinkedList {
    constructor(equalsFn = (defaultEquals)) {
        this.equalsFn = equalsFn;
        this.count = 0;
        this.head = undefined;
        this.tail = undefined;
    }
}
