import itemScreen from "../../pageobjects/ios/item.screen";
import listScreen from "../../pageobjects/ios/list.screen";

describe("Todo Item", () => {
  it("Create a Todo Item", async () => {
    // create todo list
    await listScreen.createListBtn.click();
    await listScreen.listNameInput.addValue("Things to do today");
    await listScreen.createBtn.click();
    await expect(listScreen.listNameField("Things to do today")).toBeExisting();
    await listScreen.listNameField("Things to do today").click();

    // create item
    await itemScreen.createItemBtn.click();
    await itemScreen.itemNameInput.addValue("buy chocolates");
    await itemScreen.itemDateInput.click();
    await itemScreen.dateBtn.click();
    await itemScreen.createBtn.click();
    await expect(
      await itemScreen.itemNameField("buy chocolates")
    ).toBeExisting();
    await driver.pause(2000);
  });
});
