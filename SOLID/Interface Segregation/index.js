"use strict";
/**
 ** A class Should not Have to implement methods it Does Not Need
 ** พยายามแยก method interface ให้เหมาะสมกับ class นััั้ันๆ , class แต่ละ class ไม่จำเป็นต้องใช้ method ทีอยู่ใน interface g
 */
exports.__esModule = true;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
    }
    SmartPhone.prototype.call = function (contact) {
        console.log("Calling " + contact);
    };
    SmartPhone.prototype.sendSms = function (contact, content) {
        console.log("Sending " + content + " to " + contact);
    };
    SmartPhone.prototype.openApp = function (path) {
        console.log("Opening app " + path);
    };
    SmartPhone.prototype.connectToWifi = function (ssid, password) {
        console.log("Connecting to wifi " + ssid + " with password " + password);
    };
    return SmartPhone;
}());
var Tablet = /** @class */ (function () {
    function Tablet() {
    }
    Tablet.prototype.call = function (contact) {
        console.log("This device cannott place a call");
    };
    Tablet.prototype.sendSms = function (contact, content) {
        throw new Error("This device cannot connect toa cell phone network");
    };
    Tablet.prototype.openApp = function (path) {
        console.log("Opening app " + path);
    };
    Tablet.prototype.connectToWifi = function (ssid, password) {
        console.log("Connecting to wifi " + ssid + " with password " + password);
    };
    return Tablet;
}());
var smartPhone = new SmartPhone();
smartPhone.call("x");
smartPhone.sendSms("Call me now", "EXE");
smartPhone.openApp("Sender");
smartPhone.connectToWifi("Miew", "1w2e3r4t");
var tablet = new Tablet();
tablet.call("x");
tablet.sendSms("Call me now", "EXE");
tablet.openApp("Sender");
tablet.connectToWifi("Miew", "1w2e3r4t");
