import { config } from "./wdio.shared.conf.js";
import path from "path";

config.port = 4723;

config.specs = ["../test/specs/ios/ios-todo-item.e2e.js"];

config.capabilities = [
  {
    // capabilities for local Appium web tests on iOS
    platformName: "iOS",
    "appium:deviceName": "iPhone 16",
    "appium:platformVersion": "18.6",
    "appium:automationName": "XCUITest",
    // "appium:app": path.join(process.cwd(), "./app/ios/UIKitCatalog.app"),
    // "appium:app": path.join(process.cwd(), "./app/ios/MVCTodo.app"),
    "appium:app": path.join(process.cwd(), "./app/ios/wdiodemoapp.app"),
  },
];

export { config };
