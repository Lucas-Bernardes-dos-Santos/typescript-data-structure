export default class Node<T> {
  public element: T
  public next: Node<T> | undefined

  constructor(element: T, next: Node<T> | undefined = undefined) {
    this.element = element
    this.next = next
  }
}