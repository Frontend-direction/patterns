class Color {
  constructor(name) {
    this.name=name;
  }
}

class ColorFactory {
  constructor() {
    this.colors={}
  }

  initColor(name) {
    let color = this.colors[name];
    if(color) {
      return color;
    }
    this.colors[name]=new Color(name);
    return this.colors[name];
  }
}

const factory = new ColorFactory();
const red = factory.initColor('red');
const green = factory.initColor('green');
