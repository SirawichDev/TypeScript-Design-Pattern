/**
 ** A class Should not Have to implement methods it Does Not Need
 ** พยายามแยก method interface ให้เหมาะสมกับ class นััั้ันๆ , class แต่ละ class ไม่จำเป็นต้องใช้ method ทีอยู่ใน interface g
 */

export interface ISmartDevice {
  call: (contact: string) => void;
  sendSms: (contact: string, content: string) => void;
}
export interface TabletDevice {
  openApp: (path: string) => void;
  connectToWifi: (ssid: string, password: string) => void;
}

class SmartPhone implements ISmartDevice, TabletDevice {
  call(contact: string): void {
    console.log(`Calling ${contact}`);
  }

  sendSms(contact: string, content: string): void {
    console.log(`Sending ${content} to ${contact}`);
  }
  openApp(path: string): void {
    console.log(`Opening app ${path}`);
  }
  connectToWifi(ssid: string, password: string): void {
    console.log(`Connecting to wifi ${ssid} with password ${password}`);
  }
}

class Tablet implements TabletDevice {
  //   call(contact: string): void {
  //     console.log(`This device cannott place a call`);
  //   }
  // แก้ปัััญหา  thorw generic exception เกินคความจำเป็น แยก interface method จบ
  //   sendSms(contact: string, content: string): void {
  //     throw new Error("This device cannot connect toa cell phone network");
  //   }
  openApp(path: string): void {
    console.log(`Opening app ${path}`);
  }
  connectToWifi(ssid: string, password: string): void {
    console.log(`Connecting to wifi ${ssid} with password ${password}`);
  }
}

let smartPhone = new SmartPhone();
smartPhone.call("x");
smartPhone.sendSms("Call me now", "EXE");
smartPhone.openApp("Sender");
smartPhone.connectToWifi("Miew", "1w2e3r4t");

let tablet = new Tablet();
// tablet.call("x");
// tablet.sendSms("Call me now", "EXE");
tablet.openApp("Sender");
tablet.connectToWifi("Miew", "1w2e3r4t");
