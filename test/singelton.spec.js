const expect = require('chai').expect;
import Database from '../src/creational/singelton';

describe('singleton test', () => {
  it('one instance is created after two try of class creation', () => {
    var votersDB = new Database('voters');
    var votersDBDuplicate = new Database('voters2');

    expect(votersDB).to.equal(votersDBDuplicate);
    expect(votersDB === votersDBDuplicate).to.be.true;
  });

  it('original class instance doesn\'t change name attribute', () => {
    var votersDB = new Database('voters');

    expect(votersDB.getName()).to.equal('voters');
  });
});
