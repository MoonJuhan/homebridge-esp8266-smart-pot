'use strict'

const setup = (homebridge) => {
  homebridge.registerAccessory('homebridge-esp8266-smart-pot', 'ESP8266SmartPot', ESP8266SmartPot)
}

class ESP8266SmartPot {
  constructor(log, config, api) {
    this.log = log
    this.config = config
    this.api = api

    this.Service = this.api.hap.Service
    this.Characteristic = this.api.hap.Characteristic

    this.name = config.name
    this.ip = config.ip

    this.sensorData = {
      temperature: 0,
      humidity: 0,
    }
  }

  getServices() {
    return []
  }
}

module.exports = setup
