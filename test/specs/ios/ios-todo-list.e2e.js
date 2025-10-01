import listScreen from "../../pageobjects/ios/list.screen";

describe("Todo List", () => {
  it("Create a Todo List", async () => {
    await listScreen.createListBtn.click();
    await listScreen.listNameInput.addValue("Things to do today");
    await listScreen.createBtn.click();
    await expect(
      await listScreen.listNameField("Things to do today")
    ).toBeExisting();
    await driver.pause(3000);
  });
});
