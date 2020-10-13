// First example
export class mySpends {
  constructor(initialVal = 0) {
    this.initialVal=initialVal;
  }

  add(val) {
    this.initialVal += val;
    return this;
  }
}

const spends = new mySpends();
console.log(spends.add(20).add(50).initialVal)

// Second Example
export class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(p) {
    this.products.push(p);
  };
}

export class Discount {
  calc(products) {
    let ndiscount = new QuantityDiscount();
    let pdiscount = new PriceDiscount();
    let none = new NoneDiscount();
    ndiscount.setNext(pdiscount);
    pdiscount.setNext(none);
    return ndiscount.exec(products);
  };
}

export class QuantityDiscount {
  constructor() {
    this.next = null;
  }

  setNext(fn) {
    this.next = fn;
  };

  exec(products) {
    let result = 0;
    if (products.length > 3)
      result = 0.05;

    return result + this.next.exec(products);
  };
}

export class PriceDiscount {
  constructor() {
    this.next = null;
  }

  setNext(fn) {
    this.next = fn;
  };

  exec(products) {
    let result = 0;
    let total = products.reduce((a, b) => a + b);

    if (total >= 500)
      result = 0.1;

    return result + this.next.exec(products);
  };
}

export class NoneDiscount {
  exec() {
    return 0;
  };
}
