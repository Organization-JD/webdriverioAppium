import { config } from "./wdio.shared.conf.js";

config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;
config.hostname = "hub.browserstack.com";

config.specs = ["../test/specs/ios/ios-todo-item.e2e.js"];

config.services = [
  ["browserstack"],
  {
    testObservability: true,
    testObservabilityOptions: {
      projectName: "BrowserStack WebdriverIO iOS",
      buildNmae: "BrowserStack WebdriverIO iOS Build",
      buildTag: "BrowserStack WebdriverIO iOS Tag",
    },
    app: `${process.env.BROWSERSTACK_APP_PATH_IOS}`,
  },
];

config.capabilities = [
  {
    "bstack:options": {
      deviceName: "iPHone 16",
      platformVersion: "18.6",
      platformName: "ios",
      networkLogs: "true",
      consoleLogs: "verbose",
    },
  },
];

export { config };
