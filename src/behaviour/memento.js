class Memento {
  constructor(value) {
    this.value = value;
  }
}

const originator = {
  store: function(val) {
    return new Memento(val)
  },
  restore: function(memento) {
    return memento.value;
  }
}

class CareTaker {
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

const careTaker = new Caretaker();
careTaker.addMemento(originator.store("hello"));
careTaker.addMemento(originator.store("hello world"));
careTaker.addMemento(originator.store("hello world !!!"));

var result = originator.restore(careTaker.getMemento(2));