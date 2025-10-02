import addNoteScreen from "../../pageobjects/android/add-note.screen";

describe("Add Notes", () => {
  it("Skip Tutorial", async () => {
    await addNoteScreen.skipBtn.click();

    // assertion
    await expect($("//android.widget.TextView[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/empty_text']")).toHaveText("Add note");
  });

  it.only("add a note, save changes, verify note", async () => {
    await addNoteScreen.skipBtn.click();

    // assertion
    await expect(addNoteScreen.emptyBody).toHaveText("Add note");

    await addNoteScreen.addNoteBtn.click();
    await addNoteScreen.textBtn.click();

    await expect($("//*[@text='Editing']")).toBeDisplayed();
    
    // add note title
    await addNoteScreen.inputTitle.setValue("Fav anime list");
    // add note body
    await addNoteScreen.inputBody.setValue("Yugioh\nDragon Ball\nDigimon");

    await addNoteScreen.saveNote();

    // assertion
    await expect(addNoteScreen.editBtn).toBeDisplayed();
    await expect(addNoteScreen.viewNote).toHaveText("Yugioh\nDragon Ball\nDigimon");
  });
});