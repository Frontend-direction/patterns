// Option 1
export class Blanket {
  constructor(width, length, material) {
    this.width=width;
    this.length=length;
    this.material=material;
  }

  setField(key, val) {
    if (typeof val === 'object') {
      this[key]=JSON.parse(JSON.stringify(val));
    } else {
      this[key] = val
    }
  }

  clone() {
    let clone = new Blanket()
    let keys = Object.keys(this)

    keys.forEach(k => clone.setField(k, this[k]))

    return clone;
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
