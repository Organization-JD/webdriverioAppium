class ItemScreen {
  get createItemBtn() {
    return $("~Add");
  }

  get itemNameInput() {
    return $('//*[@value="Title"]');
  }

  get itemDateInput() {
    return $('//*[@value="Due"]');
  }

  get dateBtn() {
    return $("~30");
  }

  get createBtn() {
    return $("~Create");
  }

  itemNameField(name) {
    return $(`~${name}`);
  }
}

export default new ItemScreen();
