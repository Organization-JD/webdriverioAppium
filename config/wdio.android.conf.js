import { config } from "./wdio.shared.conf.js";
import path from "path";

config.port = 4723;

config.specs = ["../test/specs/android/webview.e2e.js"];

config.capabilities = [{
  // capabilities for local Appium web tests on Android
  platformName: "Android",
  "appium:deviceName": "Pixel 7 API 33",
  "appium:platformVersion": "13.0",
  "appium:automationName": "UIAutomator2",
  // "appium:app": path.join(process.cwd(), "./app/android/ApiDemos-debug.apk"),
  "appium:app": path.join(process.cwd(), "./app/android/ColorNoteNotepad.apk"),
  "appium:autoGrantPermissions": true,
}];

config.services = [
  ["appium", {
    args: {
      address: "127.0.0.1",
      port: 4723,
      relaxedSecurity: true,
      basePath: "/"
    },
    logPath: "./logs"
  }]
];

export { config };
