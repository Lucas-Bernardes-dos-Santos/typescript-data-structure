import { defaultEquals } from "../util/util.js";
export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.equalsFn = equalsFn;
        this.count = 0;
    }
}
