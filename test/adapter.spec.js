const expect = require('chai').expect;

import {
  OldCalc,
  newCalc,
  calcAdapter
} from '../src/structural/adapter';

describe('adapter pattern', () => {

  it('should add two numbers with newCalc', () => {
    const adapter = new calcAdapter();
    const oldCalc = new OldCalc();
    expect(adapter.operations(1, 3, 'add')).to.equal(oldCalc.operations(1, 3, 'add'));
  });

  it('should substruct two numbers with newCalc', () => {
    const adapter = new calcAdapter();
    const oldCalc = new OldCalc();
    expect(adapter.operations(1, 3, 'sub')).to.equal(oldCalc.operations(1, 3, 'sub'));
  });

});