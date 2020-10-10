export class IceCreamStickFactory {
  getChocolateIceCream() {
    return new ChocolateIceCream();
  }

  getvanilaIceCream() {
    return new VanilaIceCream();
  }
}

export class IceCreamBarFactory {
  getChocolateIceCream() {
    return new ChocolateIceCream();
  }

  getvanilaIceCream() {
    return new VanilaIceCream();
  }
}

export class ChocolateIceCream {
  getInfo() {
    return 'This is quite sweet but in the same time delicious ice-cream';
  }
}

export class VanilaIceCream {
  getInfo() {
    return 'If you try it once you will never forget it\'s taste';
  }
}
