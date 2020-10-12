const expect = require('chai').expect;

import {
  Kindle,
  MonoChromeScreen,
  ColorScreen
} from '../src/structural/bridge';

describe('bridge pattern', () => {
  it('Should create kindle with monochrome screen', () => {
    const book = new Kindle(new MonoChromeScreen());
    const bookInfo = book.info();
    expect(bookInfo).to.equal("This device has monochrome type of screen");
  });

  it('Should create kindle with color screen', () => {
    const book = new Kindle(new ColorScreen());
    const bookInfo = book.info();
    expect(bookInfo).to.equal("This device has color type of screen");
  });
});