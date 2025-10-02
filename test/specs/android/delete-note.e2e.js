import addNoteScreen from "../../pageobjects/android/add-note.screen";
import deleteNoteScreen from "../../pageobjects/android/delete-note.screen";

describe("Delete Notes", () => {
  it.only("delete a note and check the note in the trash can", async () => {
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

    await deleteNoteScreen.moreOptions.click();
    await deleteNoteScreen.deleteBtn.click();

    await driver.acceptAlert();

    await expect($("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/note_list']")).toBeDisplayed();

    await deleteNoteScreen.navBtn.click();

    await deleteNoteScreen.trashCanBtn.click();

    await expect($("//*[@text='Fav anime list']")).toBeDisplayed();

    await driver.pause(2000);
  });
});
