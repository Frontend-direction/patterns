class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complain) {}

  add(complain) {
    this.complaints.push(complain);
    return this.reply(complain);
  }
}

class OrdinaryComplains extends Complaints {
  reply({ id, customer, details }) {
    return `Level: ordinary, id: ${id}, customer: ${customer}, details: ${details}`;
  }
}

class SeriousComplains extends Complaints {
  reply({ id, customer, details }) {
    return `Level: serious, id: ${id}, customer: ${customer}, details: ${details}`;
  }
}

class ComplainRegistry {
  register(customer, type, detail) {
    const id = new Date();
    let complain;

    if(type === 'ordinary') {
        complain = new OrdinaryComplains();
    } else {  
      complain = new SeriousComplains();
    }

    return complain.add({id, customer, detail});
  }
}

const regNewComplain = new ComplainRegistry();
console.log(regNewComplain.register('Vova', 'ordinary', 'why I don\'t have warm water in my hause'));

