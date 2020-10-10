export class WindowsConfig {
  constructor(device) {
    this.os='Windows';
    this.specificSymbols='*/'; 
    this.device=device;
  }
}

export class LinuxConfig {
  constructor(device) {
    this.os='Linux';
    this.specificSymbols='$'; 
    this.device=device;
  }
}

export class MacConfig {
  constructor(device) {
    this.os='MacOS';
    this.specificSymbols='~'; 
    this.device=device;
  }
}

export class OsFactory {
  static osList = {
    windows: WindowsConfig,
    linux: LinuxConfig,
    mac: MacConfig
  }

  static create(device, type='windows') {
    const OperationSystem = OsFactory.osList[type] || OsFactory.osList.windows;
    const config = new OperationSystem(device);

    return config;
  }
}