describe("Android Native Features Tests", () => {
  it("Access an Activity directly", async () => {
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
    await driver.pause(3000);
    // assertion
    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    await driver.pause(3000);
  });

  it("Working with dialog boxes", async () => {
    await $("~App").click();
    await $("~Alert Dialogs").click();
    await $("~OK Cancel dialog with a message").click();


    // click on okay button
    // await $("//android.widget.Button[@text='OK']").click();

    // console.log(await driver.getAlertText());

    // accept/dismiss alert
    // await driver.dismissAlert();
    await driver.acceptAlert();

    // assertion
    await expect($("//android.widget.Button[@text='OK']")).not.toExist();
  });

  it("Vertical Scrolling", async () => {
    await $("~App").click();
    await $("~Activity").click();
    // scroll to the end
    // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    // scrollTextIntoView more stable
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();
    // await $("~Secure Surfaces").click();

    // assertion
    await expect($('~Secure Dialog')).toExist();
  });

  it("Horizontal Scrolling", async () => {
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");
    // Horizontal scrolling
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

    await driver.pause(3000);
  });

  it.only("Exercise Scrolling", async () => {
    await $("~Views").click();
    await $("~Date Widgets").click();
    await $("~1. Dialog").click();

    const date = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]');
    const currentDate = date.getText();

    await $("~change the date").click();

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

    await $("//*[@text='10']").click();
    // await $("~10 November 2025").click();

    await $("//android.widget.Button[@text='OK']").click();

    // verify the updated date
    await expect(await date.getText()).not.toEqual(currentDate);
    await driver.pause(3000);
  });
});
