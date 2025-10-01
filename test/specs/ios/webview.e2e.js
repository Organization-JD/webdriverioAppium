describe("iOS Webview", () => {
  it("Working with dynamic webview", async () => {
    await $("~Webview").click();

    // wait until you get multiple context
    await driver.waitUntil(
      async () => {
        const contexts = await driver.getContexts();
        return contexts.length > 1;
      },
      { timeout: 30000, timeoutMsg: "Timed out waiting for another context" }
    );
    // get current context
    // await driver.getContext();

    // pause
    // await driver.pause(5000);

    // get all the contexts
    const contexts = await driver.getContexts();
    // [ 'NATIVE_APP', 'WEBVIEW_45303.1' ]

    // switch to the webview context
    await driver.switchContext(contexts[1]);

    // assertion
    const subtitleTxt = $(".hero__subtitle");
    await expect(subtitleTxt).toHaveText(
      "Next-gen browser and mobile automation test framework for Node.js"
    );

    // switch back to the native app
    await driver.switchContext("NATIVE_APP");
    await $("~Home").click();

    // assertion
    const webdriverTxt = $('//*[@name="WEBDRIVER"]');
    await expect(webdriverTxt).toBeDisplayed();
  });
});
