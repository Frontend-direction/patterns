
class IceCreamStickFactory {
  getChocolateIceCream() {
    return new ChocolateIceCream();
  }

  getvanilaIceCream() {
    return new VanilaIceCream();
  }
}

class IceCreamBarFactory {
  getChocolateIceCream() {
    return new ChocolateIceCream();
  }

  getvanilaIceCream() {
    return new VanilaIceCream();
  }
}

class ChocolateIceCream {
  getInfo() {
    return 'This is quite sweet but in the same time delicious ice-cream';
  }
}

class VanilaIceCream {
  getInfo() {
    return 'If you try it once you will never forget it\'s taste';
  }
}
