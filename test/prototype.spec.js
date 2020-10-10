const expect = require('chai').expect;
import { Blanket }from '../src/creational/prototype';

describe('prototype pattern', () => {
  it('should create new instance with same properties', () => {
    var blanket = new Blanket(10, 5, 'cotton');
    var myBlanket = blanket.clone();
    expect(myBlanket.width).to.equal(10);
    expect(myBlanket.length).to.equal(5);
    expect(myBlanket).to.be.instanceOf(Blanket);
    expect(myBlanket === blanket).to.be.false;
  });
});