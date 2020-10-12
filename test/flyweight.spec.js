const expect = require('chai').expect;

import { ColorFactory } from '../src/structural/flyweight';

describe('flyweight pattern', () => {

  it('should add two new variables', () => {
    const factory = new ColorFactory();
    factory.initColor('RED');
    factory.initColor('RED');
    factory.initColor('RED');
    factory.initColor('YELLOW');
    factory.initColor('YELLOW');

    expect(Object.keys(factory.colors)).to.have.lengthOf(2);
  });

});