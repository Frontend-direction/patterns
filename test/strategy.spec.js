const expect = require('chai').expect;

import {
  Strategy,
  Commute,
  Bus,
  Taxi,
  Car,
} from '../src/behaviour/strategy';

describe('strategy pattern', () => {

  describe('SORT strategy', () => {
    it('should use Buble sort as a strategy', () => {
      const strategy = new Strategy();
      const arr = strategy.initSorting([10,89,20,1,4, 55]);
      const sortedArr = [1,4,10,20,55,89];
      expect(arr).to.deep.equal(sortedArr);
    });
  
    it('should use SelectionSort sort as a strategy', () => {
      const strategy = new Strategy();
      const arr = strategy.initSorting([10,89,20]);
      const sortedArr = [10,20,89];
      expect(arr).to.deep.equal(sortedArr);
    });
  })

  describe('Vehicle strategy', () => {
    it('should use Taxi as a commute', () => {
      const commute = new Commute();
      const timeToTravel = commute.travel(new Taxi());

      expect(timeToTravel).to.equal(5);
    });

    it('should use Bus as a commute', () => {
      const commute = new Commute();
      const timeToTravel = commute.travel(new Bus());

      expect(timeToTravel).to.equal(10);
    });

    it('should use Car as a commute', () => {
      const commute = new Commute();
      const timeToTravel = commute.travel(new Car());

      expect(timeToTravel).to.equal(3);
    });
  })
});