export class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complain) {}

  add(complain) {
    this.complaints.push(complain);
    return this.reply(complain);
  }
}

export class OrdinaryComplains extends Complaints {
  reply({ id, customer, details }) {
    return `Level: ordinary, id: ${id}, customer: ${customer}, details: ${details}`;
  }
}

export class SeriousComplains extends Complaints {
  reply({ id, customer, details }) {
    return `Level: serious, id: ${id}, customer: ${customer}, details: ${details}`;
  }
}

export class ComplainRegistry {
  register(customer, type, details) {
    const id = new Date();
    let complain;

    if(type === 'ordinary') {
      complain = new OrdinaryComplains();
    } else {  
      complain = new SeriousComplains();
    }

    return complain.add({id, customer, details});
  }
}

const regNewComplain = new ComplainRegistry();
console.log(regNewComplain.register('Vova', 'ordinary', 'why I don\'t have warm water in my hause'));

