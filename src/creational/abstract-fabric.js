export class IceCreamStickFactory {
  getChocolateIceCream() {
    return new ChocolateStickIceCream();
  }

  getvanilaIceCream() {
    return new VanilaStickIceCream();
  }
}

export class IceCreamBarFactory {
  getChocolateIceCream() {
    return new ChocolateBarIceCream();
  }

  getvanilaIceCream() {
    return new VanilaBarIceCream();
  }
}

export class ChocolateStickIceCream {
  getInfo() {
    return 'This is quite sweet but in the same time delicious ice-cream';
  }
}

export class VanilaStickIceCream {
  getInfo() {
    return 'If you try it once you will never forget it\'s taste';
  }
}

export class ChocolateBarIceCream {
  getInfo() {
    return 'This is quite sweet but in the same time delicious ice-cream';
  }
}

export class VanilaBarIceCream {
  getInfo() {
    return 'If you try it once you will never forget it\'s taste';
  }
}
