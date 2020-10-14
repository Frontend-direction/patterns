class Emploee {
  constructor(name, salary) {
    this.name = name,
    this.salary = salary
  }
  
  responsability() {}

  getPaid() {
    return `${this.name} has ${this.salary}`;
  }
}

export class Developer extends Emploee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsability() {
    return `${this.name} as a Develop has to know at least two programmin language`;
  }
}

const dev = new Developer('Vova', 10000);