class Task {
  constructor() {
    this.name = '';
    this.description = '';
    this.startDate = '' || new Date().toISOString().slice(0,10);
    this.dueDate = '';
  }
}

class TaskCreator {
  constructor() {
    this.task = new Task();
  }

  setName (name) {
    this.task.name = name;
    return this;
  }

  setDescription (description) {
      this.task.description = description;
      return this;
  }

  setStartDate (startDate) {
      this.task.startDate = startDate;
      return this;
  }

  setDueDate (dueDate) {
      this.task.dueDate = dueDate;
      return this;
  }

  build(){
      return this.task;
  }
}

const task1 = new TaskCreator()
                  .setName('Build a fence')
                  .setDescription('The fence should be grey and metal')
                  .setStartDate('20.08.2020')
                  .setDueDate('22.08.2020')
                  .build()
