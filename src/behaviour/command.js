class Plant {
  constructor(isWorking=false) {
    this.isWorking=isWorking
  }

  start() {
    this.isWorking=true;
  }

  stop() {
    this.isWorking=false;
  }
}

class Command {
  constructor(target) {
    this.target=target;
    this.infoExecutedCommand=[];
  }

  execute(command) {
    this.target[command]();
    this.infoExecutedCommand.push({ time: new Date(), command });
  } 
}

const cockpit = new Command(new Plant());
cockpit.execute('start');
cockpit.execute('stop');
console.log(cockpit.infoExecutedCommand);