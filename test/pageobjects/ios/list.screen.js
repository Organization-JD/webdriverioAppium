class ListScreen {
  get createListBtn() {
    return $("~Add");
  }

  get listNameInput() {
    return $('//*[@value="List Name"]');
  }

  get createBtn() {
    return $("~Create");
  }

  listNameField(name) {
    return $(`~${name}`);
  }
}

export default new ListScreen();
