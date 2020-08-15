class BookReader {
  constructor(screen) {
    this.screen = screen;
  }
}

class Kindle extends BookReader {
  constructor(screen) {
    super(screen);
  }

  info() {
    return `This device has ${this.screen.get()} type of screen`;
  }
}

class Screen {
  constructor(type) {
    this.type=type;
  }

  get() {
    return this.type;
  }
}

class MonoChromeScreen extends Screen {
  constructor() {
    super('monochrome')
  }
}

class ColorScreen extends Screen {
  constructor() {
    super('color');
  }
}

const book = new Kindle(new MonoChromeScreen());
const info = book.info();