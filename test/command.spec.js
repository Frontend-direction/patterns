const expect = require('chai').expect;

import {
  Plant,
  Command,
} from '../src/behaviour/command';

describe('command pattern', () => {

  it('should start plant', () => {
    const plant = new Plant()
    const cockpit = new Command(plant);
    cockpit.execute('start');

    expect(plant.isWorking).to.be.true;
  });

  it('should shut down plant', () => {
    const plant = new Plant()
    const cockpit = new Command(plant);
    cockpit.execute('start');
    cockpit.execute('stop');

    expect(plant.isWorking).to.be.false;
  });

  it('should show info about executed command', () => {
    const plant = new Plant()
    const cockpit = new Command(plant);
    cockpit.execute('start');
    const info = { time: new Date(), command: 'start' }
    expect(cockpit.infoExecutedCommand[0]).to.deep.equal(info);
  });
});