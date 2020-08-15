class Database {
  constructor(name) {
    if(Database.exists) {
      return Database.instanse;
    }

    Database.instanse=this;
    Database.exists=true;
    this.name=name;
  }

  getName() {
    return this.name;
  }
}
