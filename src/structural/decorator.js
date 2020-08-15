class Cheesburger {
  constructor() {
    this.price=10;
  }

  getPrice() {
    return this.price;
  }
}


class SauseDecorator extends Cheesburger {
  constructor(burger) {
    super();
    this.burger=burger
  }

  getPrice() {
    return this.burger.getPrice() + 5;
  }
}

class SaladDecorator extends Cheesburger {
  constructor(burger) {
    super();
    this.burger=burger;
  }

  getPrice() {
    return this.burger.getPrice() + 7;
  }
}


const cheesburger = new Cheesburger();
const cheesburgerWithSause = new SauseDecorator(cheesburger);
const cheesburgerWithSauseAndSalad = new SaladDecorator(cheesburgerWithSause);

console.log(cheesburgerWithSauseAndSalad.getPrice());