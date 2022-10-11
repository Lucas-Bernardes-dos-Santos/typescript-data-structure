import { defaultEquals } from "../util/util.js";
import DoublyNode from "./models/DoublyNode.js";
export default class DoublyLinkedList {
    constructor(equalsFn = (defaultEquals)) {
        this.equalsFn = equalsFn;
        this.count = 0;
        this.head = undefined;
        this.tail = undefined;
    }
    // Private and Protected METHODS
    checkIndex(index) {
        return index >= 0 && index <= this.count;
    }
    // Public METHODS
    insert(element, index) {
        if (this.checkIndex(index)) { // Verificando se o index passado é válido
            let node = new DoublyNode(element);
            if (index === 0) { // Inserir em head
                if (this.head === undefined) { // Se head estiver vazio
                    this.head = node;
                    this.tail = node;
                }
                else {
                    node.next = this.head;
                    this.head.previous = node;
                    this.head = node;
                }
            }
            else if (index === this.count) { // Inserir em tail
                this.tail.next = node; // tail.next agora aponta para node, que será o último elemento
                node.previous = this.tail; // O novo elemento agora tem seu previous apontando para tail
                this.tail = node; // Agora tail aponta para node que é o último elemento
            }
            else { // Inserir no meio da lista
                let previous = this.getElementAt(index - 1); // Elemento uma posição antes de onde será colocado o novo elemento
                let current = previous.next; // Elemento da posição onde entrará o novo elemento
                node.next = current; // Novo elemento apontando para current
                current.previous = node; // Agora currente.previous irá apontar para node
                node.previous = previous; // Novo elemento apontando para previous
                previous.next = node; // Agora previous.next aponta para node
            }
            this.count++;
            return true;
        }
        return false;
    }
    getElementAt(index) {
        if (this.checkIndex(index)) {
            let node = this.head;
            for (let i = 0; (i < index) && (node != null); i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    size() {
        return this.count;
    }
    getHead() {
        return this.head;
    }
    getTail() {
        return this.tail;
    }
}
