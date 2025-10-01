import { config } from "./wdio.shared.conf";
import path from "path";

config.port = 4723;

config.specs = ["../test/specs/android/test.e2e.js"];

config.capabilities = {
  // capabilities for local Appium web tests on Android
  platformName: "Android",
  "appium:deviceName": "Medium Phone API 33",
  "appium:platformVersion": "9.0",
  "appium:automationName": "UIAutomator2",
  "appium:app": path.join(process.cwd(), "./app/ios/MVCTodo.apk"),
};

export { config };
