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
    push(element) {
        let node = new DoublyNode(element);
        if (this.head === undefined) { // Caso a lista esteja vazia
            this.head = node;
            this.tail = node;
        }
        else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.count++;
    }
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
    remove(element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    }
    removeAt(index) {
        if (this.checkIndex(index)) {
            let current = this.head;
            if (index === 0) { // Remover o Primeiro elemento
                this.head = current === null || current === void 0 ? void 0 : current.next;
                if (this.count === 1) {
                    this.tail = undefined;
                }
                else {
                    this.head.previous = undefined;
                }
            }
            else if (index === this.count - 1) { // Remover o último elemento
                current = this.tail;
                this.tail = current.previous;
                this.tail.next = undefined;
            }
            else { // Remover um elemento no meio da lista
                current = this.getElementAt(index);
                let previous = current.previous; // Faz a ligação com o next de current
                previous.next = current.next;
            }
            this.count--;
            return current;
        }
        return undefined;
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return this.count;
    }
    indexOf(element) {
        let current = this.head;
        for (let index = 0; index < this.count && current != null; index++) {
            if (this.equalsFn(element, current.element))
                return index;
            current = current === null || current === void 0 ? void 0 : current.next;
        }
        return -1;
    }
    getHead() {
        return this.head;
    }
    getTail() {
        return this.tail;
    }
    toString() {
        if (this.head == null)
            return '';
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString}, ${current === null || current === void 0 ? void 0 : current.element}`;
            current = current.next;
        }
        return objString;
    }
}
