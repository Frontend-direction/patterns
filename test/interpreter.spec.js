const expect = require('chai').expect;

import {
  Num,
  Min,
  Sum
} from '../src/behaviour/interpreter';

describe('interpreter pattern', () => {

  it('should return 150 in case adding new Num and new Min', () => {
    var result = new Sum(new Num(100), new Min(new Num(100), new Num(50)));

    expect(result.interpret()).to.equal(150);
  });
});