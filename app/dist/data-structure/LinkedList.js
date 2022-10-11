import { defaultEquals } from "../util/util.js";
import Node from "./models/Node.js";
export default class LinkedList {
    constructor(equalsFn = (defaultEquals)) {
        this.equalsFn = equalsFn;
        this.count = 0;
        this.head = undefined;
    }
    // Private and Protected methods
    checkIndex(index) {
        return index >= 0 && index <= this.count;
    }
    // Public methods
    push(element) {
        const node = new Node(element, undefined);
        if (this.head == null)
            this.head = node;
        else {
            let current = this.head;
            // Pegando o último elemento da lista
            while (current.next != undefined)
                current = current.next;
            // Atribuindo o novo nó ao next do último elemento
            current.next = node;
        }
        this.count++;
    }
    insert(element, index) {
        if (this.checkIndex(index)) {
            let node = new Node(element);
            if (index === 0) { // Inserir na primeira posição
                let current = this.head;
                node.next = current;
                this.head = node;
            }
            else {
                let previous = this.getElementAt(index - 1); // Pegando um elemento antes da posição que o novo elemento será inserido
                let current = previous === null || previous === void 0 ? void 0 : previous.next; // Elemento na posição que o novo elemento será inserido
                previous.next = node;
                node.next = current;
            }
            this.count++;
            return true;
        }
        return false;
    }
    remove(element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    }
    removeAt(index) {
        // Verificar se o index está dentro do intervalo
        if (this.checkIndex(index)) {
            let current = this.head;
            if (index === 0) { // Remove o primeiro elemento
                this.head = current.next;
            }
            else {
                let previous = this.getElementAt(index - 1); // Pegando o elemento anterior ao que será removido
                current = previous.next; // Pegando o elemento que será removido
                previous.next = current === null || current === void 0 ? void 0 : current.next; // Elemento anterior agora aponta para o elemento seguinte do que será removido
            }
            this.count--;
            return current;
        }
        return undefined;
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
    getHead() {
        return this.head;
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
    size() {
        return this.count;
    }
    isEmpty() {
        return this.size() === 0;
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
