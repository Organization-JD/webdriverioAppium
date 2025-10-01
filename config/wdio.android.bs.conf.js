import { config } from "./wdio.shared.conf.js";

config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;
config.hostname = "hub.browserstack.com";

config.specs = ["../test/specs/android/test.e2e.js"];

config.services = [
  [
    "browserstack",
    {
      testObservability: true,
      testObservabilityOptions: {
        projectName: "BrowserStack WebdriverIO Android",
        buildName: "BrowserStack WebdriverIO Android Build",
        buildTag: "BrowserStack WebdriverIO Android Tag",
      },
      app: `${process.env.BROWSERSTACK_APP_PATH_ANDROID}`,
    },
  ],
];

config.capabilities = [
  {
    "bstack:options": {
      deviceName: "Samsung Galaxy S23 Ultra",
      platformVersion: "13.0",
      platformName: "android",
      networkLogs: "true",
      consoleLogs: "verbose",
    },
    "appium:autoGrantPermissions": true,
  },
];

config.commonCapabilities = {
  "bstack:options": {
    debug: true,
  },
};

export { config };
