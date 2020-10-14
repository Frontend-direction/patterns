const expect = require('chai').expect;
import {
  Ninja,
  visitor
} from '../src/behaviour/visitor';

describe('visitor pattern', () => {
  it('Should create ninja', () => {
    const splinter = new Ninja("Splinter", 100);
    splinter.acceptVisitor(visitor);

    expect(splinter.getPowerLevel()).to.equal(10000);
  });
});