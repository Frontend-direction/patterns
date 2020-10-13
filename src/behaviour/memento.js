class Memento {
  constructor(value) {
    this.value = value;
  }
}

export const originator = {
  store: function(val) {
    return new Memento(val)
  },
  restore: function(memento) {
    return memento.value;
  }
}

export class CareTaker {
  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento(index) {
    return this.values[index];
  }
}
