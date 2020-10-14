const expect = require('chai').expect;

import {
  Developer
} from '../src/behaviour/template';

describe('template pattern', () => {

  it('sanity', () => {
    const dev = new Developer('Vova', 10000);

    expect(dev.responsability()).to.equal('Vova as a Develop has to know at least two programmin language');
  })
});