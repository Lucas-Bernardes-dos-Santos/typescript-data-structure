export class Persons {
  constructor(
    private name: string,
    private age: number
  ) {}

  toString(): string {
    return `${this.name} - ${this.age}`
  }
}