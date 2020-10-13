const expect = require('chai').expect;

import {
  TrafficTower,
  Airplane
} from '../src/behaviour/mediator';

describe('mediator pattern', () => {

  it('should return position of airplanes', () => {
    const trafficTower = new TrafficTower();
    const boeing1 = new Airplane(10, trafficTower);
    const an70 = new Airplane(15, trafficTower);

    expect(boeing1.requestPositions()).to.deep.equals([10, 15]);
  });
});