const expect = require('chai').expect;

import {
  Cabinet,
  Chair,
  Table
} from '../src/structural/composite';

describe('composity pattern', () => {

  it('should create cabinet with two furniture', () => {
    const cabinet = new Cabinet();
    cabinet.add(new Table());
    cabinet.add(new Chair());

    expect(cabinet.equipments.length).to.equal(2);
  });

  it('should create cabinet with chair and table', () => {
    const cabinet = new Cabinet();
    cabinet.add(new Table());
    cabinet.add(new Chair());

    expect(cabinet.getPrice()).to.equal(320);
  });
});