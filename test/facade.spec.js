const expect = require('chai').expect;

import { ComplainRegistry } from '../src/structural/facade';

describe('facade pattern', () => {

  it('should create ordinary complain', () => {
    const regNewComplain = new ComplainRegistry();
    const result = regNewComplain.register('Vova', 'ordinary', 'why I don\'t have warm water in my hause');
    const time = new Date();
    expect(result).to.equal(`Level: ordinary, id: ${time}, customer: Vova, details: why I don\'t have warm water in my hause`);
  });

  it('should create serious complain', () => {
    const regNewComplain = new ComplainRegistry();
    const result = regNewComplain.register('Vova', 'serious', 'why I don\'t have warm water in my hause');
    const time = new Date();
    expect(result).to.equal(`Level: serious, id: ${time}, customer: Vova, details: why I don\'t have warm water in my hause`);
  });

});