class WindowsConfig {
  constructor(device) {
    this.os='Windows';
    this.specificSymbols='*/'; 
    this.device=device;
  }
}

class LinuxConfig {
  constructor(device) {
    this.os='Linux';
    this.specificSymbols='$'; 
    this.device=device;
  }
}

class MacConfig {
  constructor(device) {
    this.os='MacOS';
    this.specificSymbols='~'; 
    this.device=device;
  }
}

class OsFactory {
  static osList = {
    windows: WindowsConfig,
    linux: LinuxConfig,
    mac: MacConfig
  }

  create(device, type='windows') {
    const OperationSystem = OsFactory.osList[type] || OsFactory.list.windows;
    const config = new OperationSystem(device);

    return config;
  }
}