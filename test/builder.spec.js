const expect = require('chai').expect;
import { Task, TaskCreator} from '../src/creational/builder';

describe('builder pattern', () => {
  it('should create task instanse with set fields', () => {
    const taskCreator = new TaskCreator();
    const name = 'Majesty JS';
    const description = 'Learn JS patterns and wou will code as a Almighty:)';
    const startDate = '01.09.20';
    const dueDate = '15.10.20';

    const myTask = taskCreator
      .setName(name)
      .setDescription(description)
      .setStartDate(startDate)
      .setDueDate(dueDate)
      .build();
      
    expect(myTask.name).to.equal(name);
    expect(myTask.description).to.equal(description);
    expect(myTask.startDate).to.equal(startDate);
    expect(myTask.dueDate).to.equal(dueDate);
  });
});