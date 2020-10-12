export class Equipment {
  getPrice() {
    return this.price || 0;
  }

  setName(name) {
    this.name = name;
  }
}

export class Composite extends Equipment {

  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment) {
    this.equipments.push(equipment);
  }

  getPrice() {
    return this.equipments.map(equipment => {
      return equipment.getPrice();
    }).reduce((a, b) => {
      return a + b;
    });
  }
}

export class Cabinet extends Composite {
  constructor() {
    super();
    this.setName('cabinet');
  }
}

export class Chair extends Equipment {
  constructor() {
    super();
    this.setName('Plastic Chair');
    this.price=120;
  }
}


export class Table extends Equipment {
  constructor() {
    super();
    this.setName('Wood table');
    this.price=200;
  }
}


const cabinet = new Cabinet();
cabinet.add(new Table());
cabinet.add(new Chair());
const secondCabinet=new Cabinet()
cabinet.add(secondCabinet);
secondCabinet.add(new Table())