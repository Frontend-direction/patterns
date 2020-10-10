export class OldCalc {
  operations(num1, num2, operand) {
    switch(operand) {
      case 'add': return num1 + num2;
      case 'sub': return num1 - num2;
      default: return NaN;
    }
  }
}

export class newCalc {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }
}

export class calcAdapter {
  constructor() {
    this.calc = new newCalc();
  }

  operations(num1, num2, operand) {
    switch(operand) {
      case 'add': return this.calc.add(num1, num2);
      case 'sub': return this.calc.subtract(num1, num2);
      default: return NaN;
    }
  }
}

const adaptCalc = new calcAdapter();
const result = adaptCalc.operations(1, 3, 'add'); // Use newCalc but with oldCal interface
