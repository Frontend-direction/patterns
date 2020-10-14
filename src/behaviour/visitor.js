export class Ninja {
  constructor(name, power) {
    this.name = name
    this.power = power
  }

  getPowerLevel () {
    return this.power
  }
  
  setPowerLevel(power) {
    this.power = power;
  };

  
  acceptVisitor(functionVisitor) {
    return functionVisitor(this);
  } 
}

const splinter = new Ninja("Splinter", 100);
export const visitor = (ninja) => ninja.setPowerLevel(ninja.getPowerLevel() * 100);


splinter.acceptVisitor(visitor);

console.log(splinter.getPowerLevel());