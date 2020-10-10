const expect = require('chai').expect;
import { WindowsConfig, LinuxConfig, MacConfig, OsFactory } from '../src/creational/factory';

describe('Factory pattern', () => {
  it('should create Linux config instance', () => {
    const linuxConfig = OsFactory.create('dell G5', 'linux');
    expect(linuxConfig.os).to.equal('Linux');
  });

  it('should Linux spec symbol is properly set', () => {
    const linuxConfig = OsFactory.create('dell G5', 'linux');
    expect(linuxConfig.specificSymbols).to.equal('$');
  });
});