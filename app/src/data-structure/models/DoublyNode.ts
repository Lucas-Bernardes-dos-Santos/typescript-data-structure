export default class DoublyNode<T> {
  public element: T
  public previous: DoublyNode<T> | undefined
  public next: DoublyNode<T> | undefined

  constructor(
      element: T, 
      previous: DoublyNode<T> | undefined = undefined, 
      next: DoublyNode<T> | undefined = undefined
  ) {
    this.element = element
    this.previous = previous
    this.next = next
  }
}