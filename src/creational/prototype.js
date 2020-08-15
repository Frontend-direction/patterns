class Blanket {
  constructor(width, length, material) {
    this.width=width;
    this.length=length;
    this.material=material;
  }

  clone() {
    return new Blanket(this.width, this.length, this.material);
  }
}