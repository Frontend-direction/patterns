// Option 1
export class Sort {
  constructor(list) {
    this.list = list;
  }
}


export class BubleSort extends Sort {
  constructor(list) {
    super(list);
  }

  sort() {
    const len = this.list.length;

    for (let i = len-1; i>=0; i--){
      for(let j = 1; j<=i; j++){
        if(this.list[j-1]>this.list[j]){
            let temp = this.list[j-1];
            this.list[j-1] = this.list[j];
            this.list[j] = temp;
          }
      }
    }

    return this.list;
  }
}

export class SelectionSort extends Sort {
  constructor(list) {
    super(list);
  }

  sort() {
    const len = this.list.length;
    let minIdx, temp; 
  
    for(let i = 0; i < len; i++){
      minIdx = i;
      for(let  j = i+1; j<len; j++){
        if(this.list[j]<this.list[minIdx]){
            minIdx = j;
        }
      }
      temp = this.list[i];
      this.list[i] = this.list[minIdx];
      this.list[minIdx] = temp;
    }

    return this.list;
  }
}

export class Strategy {
  initSorting(arr) {
    const sortStrategy = arr.length > 4 ? new BubleSort(arr) : new SelectionSort(arr);

    return sortStrategy.sort();
  }
}

const strategy = new Strategy();
const sortedArray = strategy.initSorting([10,89,20,1,4, 55]);

//Option 2
class Vehicle {
  travelTime() {
    return this.timeTaken
  }
}

export class Bus extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 10
  }
}

export class Taxi extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 5
  }
}

export class Car extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 3
  }
}

export class Commute {
  travel(transport) {
    return transport.travelTime()
  }
}

const commute = new Commute()

console.log(commute.travel(new Taxi()))
console.log(commute.travel(new Bus()))
console.log(commute.travel(new Car()))