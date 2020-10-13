const expect = require('chai').expect;

import {
  CareTaker,
  originator
} from '../src/behaviour/memento';

describe('memento pattern', () => {
  
  it('should create memento with values', () => {
    const careTaker = new CareTaker();
    careTaker.addMemento(originator.store("hello"));
    careTaker.addMemento(originator.store("hello world"));
    careTaker.addMemento(originator.store("hello world !!!"));

    const result = originator.restore(careTaker.getMemento(1));
    expect(result).to.equal("hello world");
  });

});