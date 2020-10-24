
// Option 1
class BuildCompany {
  constructor(wallCreator) {
    this._wallCreator = wallCreator;
  }

  set wallCreator(creator) {
    this._wallCreator=creator;
  }

  buildFoundation() {
    console.log(`_____________`);
  }

  buildRoom() {
    this.wallCreator.buildWallWithDoor();
    this.wallCreator.buildWallWithWindow();
    this.wallCreator.buildWall();
    this.wallCreator.buildWall();
  }

  buildRoof() {
    console.log(`^^^^^^^^^^^^^
                    ^^^^^^^`);
  }
}

class BrickWallCreator {
  buildWallWithDoor() {
    console.log('|-|')
  }
  buildWallWithWindow() {
    console.log('|{}|')
  }
  buildWall() {
    console.log('||')
  }
}

// Option 2
export class BookReader {
  constructor(screen) {
    this.screen = screen;
  }
}

export class Kindle extends BookReader {
  constructor(screen) {
    super(screen);
  }

  info() {
    return `This device has ${this.screen.get()} type of screen`;
  }
}

export class Screen {
  constructor(type) {
    this.type=type;
  }

  get() {
    return this.type;
  }
}

export class MonoChromeScreen extends Screen {
  constructor() {
    super('monochrome')
  }
}

export class ColorScreen extends Screen {
  constructor() {
    super('color');
  }
}

const book = new Kindle(new MonoChromeScreen());
const info = book.info();
