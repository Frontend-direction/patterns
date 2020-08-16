class Database {
  constructor(name) {
    if(Database.exists) {
      return Database.instanse;
    }

    Database.instanse=this;
    Database.exists=true;
    this.name=name;

    return this;
  }

  getName() {
    return this.name;
  }
}
