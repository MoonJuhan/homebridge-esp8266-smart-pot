'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var setup = function setup(homebridge) {
  homebridge.registerAccessory('homebridge-esp8266-smart-pot', 'ESP8266SmartPot', ESP8266SmartPot);
};
var ESP8266SmartPot = /*#__PURE__*/function () {
  function ESP8266SmartPot(log, config, api) {
    (0, _classCallCheck2["default"])(this, ESP8266SmartPot);
    this.log = log;
    this.log('ESP8266SmartPot Start');
    this.config = config;
    this.api = api;
    this.log(config);
    this.log(api);
    this.Service = this.api.hap.Service;
    this.Characteristic = this.api.hap.Characteristic;
    this.name = config.name;
    this.ip = config.ip;
    this.sensorData = {
      temperature: 0,
      humidity: 0
    };
  }
  (0, _createClass2["default"])(ESP8266SmartPot, [{
    key: "getServices",
    value: function getServices() {
      return [];
    }
  }]);
  return ESP8266SmartPot;
}();
module.exports = setup;