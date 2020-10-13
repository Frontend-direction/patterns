export class Bloomberg {
  constructor() {
    this.price = 222;
    this.observers = [];
  } 

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs.id !== observer.id)
  }

  setPrice(price) {
    this.price = price;
    this.notify();
  }

  getPrice() {
    return this.price;
  }

  notify() {
    this.observers.forEach(obs => obs.update(this.price))
  }
}

export class Observer {
  constructor(state = { price: 0, lastChange:new Date(), id: Math.random() }) {
    this.state = state;  
  }

  update(price) {
    this.state.price = price;
    this.state.lastChange = Date.now()
  }
}

const stream = new Bloomberg();

const observer1 = new Observer({ price: stream.getPrice() });
const observer2 = new Observer({ price: stream.getPrice() });

stream.subscribe(observer1);
stream.subscribe(observer2);

stream.setPrice(1);

console.log(observer1.state);
console.log(observer2.state);