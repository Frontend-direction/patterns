class Light {
  constructor(light) {
    this.light = light;
  }
}

class RedLight extends Light {
  constructor() {
    super('red');
  }

  showSign() {
    return 'STOP';
  }
}

class YellowLight extends Light {
  constructor() {
    super('yellow');
  }

  showSign() {
    return 'READY';
  }
}

class GreenLight extends Light {
  constructor() {
    super('green');
  }

  showSign() {
    return 'GO';
  }
}

class TrafficLight {
  constructor() {
    this.state = [
      new RedLight(),
      new YellowLight(),
      new GreenLight()
    ];
    this.currentState = this.state[0];
  }

  change() {
    const trafficlength = this.state.length;
    const currentStateIndex = this.state.findIndex(el => el === this.currentState);

    if(trafficlength > currentStateIndex + 1) {
      this.currentState = this.state[currentStateIndex + 1]
    } else {
      this.currentState = this.state[0];
    }
  }

  showSign() {
    return this.currentState.showSign();
  }
}

const traffic = new TrafficLight();
traffic.change();
traffic.change();
traffic.change();
