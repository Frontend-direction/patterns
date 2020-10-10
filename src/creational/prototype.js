// Option 1
export class Blanket {
  constructor(width, length, material) {
    this.width=width;
    this.length=length;
    this.material=material;
  }

  clone() {
    return new Blanket(this.width, this.length, this.material);
  }
}


// Option 2
export const maschine = {
  type: 'printer',

  print() {
    console.log(`This is ${this.type} and it's model is ${this.model}`)
  }
}

const newMaschine = Object.create(maschine, {model: { value: 'cannon' } });
