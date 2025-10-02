import addNoteScreen from "../../pageobjects/android/add-note.screen";
import deleteNoteScreen from "../../pageobjects/android/delete-note.screen";

describe("Android Webview", () => {
    before(async ()=>{
        await addNoteScreen.skipBtn.click();
    });
  it("Web browser access, access external link and verify content in the browser", async () => {
    await deleteNoteScreen.navBtn.click();

    await $("//*[@text='Like us on Facebook']").click();

    // get current context
    console.log(await driver.getContext());
     
    // get all the contexts
    await driver.pause(2000);
    await driver.getContexts();

    // switch to webview chrome context
    await driver.switchContext("WEBVIEW_chrome");

    // await $("//*[@text='Accept & continue']").click();

    // assertion
    // await expect($("//div[@aria-label='Log in to Facebook']//span[text()='Log In']")).toBeDisplayed();

    // await $("//*[@aria-label='Close']").click();
    // await $("//*[@id='mount_0_0_Ob']/div/div[1]/div/div[5]/div/div/div[1]/div/div[2]/div/div/div/div[1]/div").click();
    
    // await $("//android.widget.Button[@text='Close']").click();

    await driver.switchContext("NATIVE_APP");
    await driver.back();

    await $("//*[@text='Notes']").click();

    // assertion
    await expect(addNoteScreen.addNoteBtn).toBeDisplayed();
  });
});