const expect = require('chai').expect;

import { TrafficLight } from '../src/behaviour/state';

describe('state pattern', () => {

  it('should show red light', () => {
    const trafficLight = new TrafficLight();

    expect(trafficLight.showSign()).to.equal('STOP');
  });

  it('should show yellow light', () => {
    const trafficLight = new TrafficLight();
    trafficLight.change();
    expect(trafficLight.showSign()).to.equal('READY');
  });

  it('should show green light', () => {
    const trafficLight = new TrafficLight();
    trafficLight.change();
    trafficLight.change();
    expect(trafficLight.showSign()).to.equal('GO');
  });
});