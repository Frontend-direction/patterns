const expect = require('chai').expect;
import {
  Bloomberg,
  Observer,
} from '../src/behaviour/observer';

describe('Observer pattern', () => {

  it('Subscribers are triggered', () => {
    const stream = new Bloomberg();
    const observer1 = new Observer({ price: stream.getPrice() });

    stream.subscribe(observer1);
    stream.setPrice(1);
    
    expect(observer1.state.price).to.equal(1);
  });

  it('We are able to unregister a subscriber', () => {
    const stream = new Bloomberg();
    const observer1 = new Observer({ price: stream.getPrice() });

    stream.subscribe(observer1);
    stream.unsubscribe(observer1);
    stream.setPrice(1);
    
    expect(observer1.state.price).to.equal(222);
  })

});