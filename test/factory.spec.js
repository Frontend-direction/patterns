const expect = require('chai').expect;
import { OsFactory } from '../src/creational/factory';

describe('Factory pattern', () => {
  it('should create Linux config instance', () => {
    const linuxConfig = OsFactory.create('dell G5', 'linux');
    expect(linuxConfig.os).to.equal('Linux');
  });

  it('should Linux spec symbol is properly set', () => {
    const linuxConfig = OsFactory.create('dell G5', 'linux');
    expect(linuxConfig.specificSymbols).to.equal('$');
  });

  it('should create Windows config instance', () => {
    const windowsConfig = OsFactory.create('dell G5', 'windows');
    expect(windowsConfig.os).to.equal('Windows');
  });

  it('should create MacOS config instance', () => {
    const macConfig = OsFactory.create('dell G5', 'mac');
    expect(macConfig.os).to.equal('MacOS');
  });
});