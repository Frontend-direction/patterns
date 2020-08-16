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

class Developer extends Emploee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsability() {
    return 'Develop high quality programms';
  }
}

const dev = new Developer('Vova', 10000);