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