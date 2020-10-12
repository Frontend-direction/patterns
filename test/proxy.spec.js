const expect = require('chai').expect;

import {
  ProxyLibrary,
} from '../src/structural/proxy';

describe('proxy pattern', () => {

  it('should find books by Rolling', () => {
    const proxy = new ProxyLibrary();
    const rollingBooks = proxy.getBooks('J.K.Rolling');

    expect(rollingBooks).to.equal('Harry Potter');
  });

  it('should find books by Rolling', () => {
    const proxy = new ProxyLibrary();
    const tolkienBooks = proxy.getBooks('J.R.R.Tolkien');

    expect(tolkienBooks).to.equal('Lord of the rings');
  });

});