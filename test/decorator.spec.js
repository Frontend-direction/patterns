const expect = require('chai').expect;
import {
  Cheesburger,
  SauseDecorator,
  SaladDecorator
} from '../src/structural/decorator';

describe('decorator pattern', () => {

  it('should create cheesburger with sauce and salad', () => {
    const cheesburger = new Cheesburger();
    const cheesburgerWithSauce = new SauseDecorator(cheesburger);
    const cheesburgerWithSauceAndSalad = new SaladDecorator(cheesburgerWithSauce);

    expect(cheesburger.getPrice()).to.equal(10);
    expect(cheesburgerWithSauce.getPrice()).to.equal(15);
    expect(cheesburgerWithSauceAndSalad.getPrice()).to.equal(22);
  });

});