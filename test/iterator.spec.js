const expect = require('chai').expect;

// const Iterator = require('../src/behavioral/iterator/iterator');

import { Iterator, MyIterator } from '../src/behaviour/iterator';

describe('iterator pattern', () => {

  describe('Option 1', () => {
    it('should iterate through array on each step till last one', () => {
      const numbers = new Iterator([1, 2, 3]);

      expect(numbers.next()).to.equal(1);
      expect(numbers.next()).to.equal(2);
      expect(numbers.next()).to.equal(3);
      expect(numbers.hasNext()).to.false;
    })
  })
});