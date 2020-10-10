const expect = require('chai').expect;
import { 
  IceCreamStickFactory,
  IceCreamBarFactory,
} from '../src/creational/abstract-fabric';

describe('abstract factory pattern', () => {
  it('should create chockolate ice cream on stick', () => {
    const chockoStickIceCream = new IceCreamStickFactory().getChocolateIceCream();
    expect(chockoStickIceCream.getInfo()).to.equal('This is quite sweet but in the same time delicious ice-cream');
  });

  it('should create vanilla ice cream on stick', () => {
    const vanniStickIceCream = new IceCreamStickFactory().getvanilaIceCream();
    expect(vanniStickIceCream.getInfo()).to.equal('If you try it once you will never forget it\'s taste');
  });

  it('should create chockolate bar ice cream', () => {
    const chockoBarIceCream = new IceCreamBarFactory().getChocolateIceCream();
    expect(chockoBarIceCream.getInfo()).to.equal('This is quite sweet but in the same time delicious ice-cream');
  });

  it('should create vanilla ice cream on stick', () => {
    const vanniBarIceCream = new IceCreamBarFactory().getvanilaIceCream();
    expect(vanniBarIceCream.getInfo()).to.equal('If you try it once you will never forget it\'s taste');
  });
});