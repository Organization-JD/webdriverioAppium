describe('Android Elements Tests', () => {
    it('Find Elements by Accesibility id', async () =>{
        // find element by accesibility id
        await $("~App").click();

        // assertion
        await expect($("~Action Bar")).toBeExisting();
    });

    it('Find Elements by class name', async () =>{
        // find element by class name
        const className = $("android.widget.TextView");

        // assertion
        await expect(className).toHaveText("API Demos");
    });

    it('Find Elements by xpath', async () =>{
        // find element by xpath
        await $("//android.widget.TextView[@content-desc='App']").click();
        await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click();
        await $("//android.widget.Button[@content-desc='List dialog']").click();

        // find by text
        await $("//android.widget.TextView[@resource-id='android:id/text1' and @text='Command two']").click();
        // assertion
        // find by resource id
        await expect($('//android.widget.TextView[@resource-id="android:id/message"]')).toHaveText("You selected: 1 , Command two");
    });

    it('Find Elements by UIAutomator', async () => {
        // Buscar por texto que contiene "App"
        await $('android=new UiSelector().textContains("App")').click();

        // Buscar por texto que contiene "Alert Dialogs"
        await $('android=new UiSelector().textContains("Alert Dialogs")').click();
    });

    it.only("Exercise Input Element", async () => {
        await $(`~Views`).click();
        await $(`~Auto Complete`).click();
        await $(`~1. Screen Top`).click();
        await $(`//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]`).setValue("Ecuador");
        await expect($(`//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]`)).toHaveText("Ecuador");
  });
});