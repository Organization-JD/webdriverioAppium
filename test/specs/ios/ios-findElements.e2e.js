describe("iOS Find Elements", () => {
  it("find elements by accesibility id", async () => {
    await $("~Alert Views").click();
    await $("~Simple").click();
    await expect(await driver.getAlertText()).toContain(
      "A Short Title Is Best"
    );
  });

  it("find elements by tag name", async () => {
    console.log(await $("XCUIElementTypeStaticText".getText()));
    const textElements = await $$("XCUIElementTypeStaticText");
    for (const element of textElements) {
      console.log(await element.getText());
    }
  });

  it("find elements by xpath", async () => {
    await $('//*[@name="Alert Views"]').click();
    await $('//*[@label="Simple"]').click();
    await expect(await driver.getAlertText()).toContain(
      "A Short Title Is Best"
    );
  });

  it("find elements by class chain", async () => {
    // const alerText = '**/XCUIElementTypeStaticText[`name == "Alert Views"`]';
    const alerText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
    await $(`-ios class chain:${alerText}`).click();
    await $('//*[@label="Simple"]').click();
    await expect(await driver.getAlertText()).toContain(
      "A Short Title Is Best"
    );
  });

  it("find elements by predicate string", async () => {
    // const alerText = 'label == "Alert Views"';
    const alerText = 'value BEGINSWITH[c] "alert"';
    await $(`-ios predicate string:${alerText}`).click();
    await $('//*[@label="Simple"]').click();
    await expect(await driver.getAlertText()).toContain(
      "A Short Title Is Best"
    );
  });

  it.only("Exercise Search Element", async () => {
    // await $(`//XCUIElementTypeStaticText[@name="Search"]`).click();
    // await $(`//XCUIElementTypeStaticText[@name="Default"]`).click();
    await $(`~Search`).click();
    await $(`~Default`).click();
    await $(`//XCUIElementTypeSearchField`).setValue("I love this course");
    await expect($(`//XCUIElementTypeSearchField`)).toHaveAttr("value");
    // await $(`//XCUIElementTypeButton[@name="Clear text"]`).click();
    await $(`~Clear text`).click();
    await expect($(`//XCUIElementTypeSearchField`)).not.toHaveAttr("value");
  });
});
