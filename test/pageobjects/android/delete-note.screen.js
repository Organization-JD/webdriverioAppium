class DeleteNoteScreen {
    get moreOptions(){
        return $(`~More`);
    }

    get deleteBtn(){
        return $("//*[@text='Delete']");
    }

    get navBtn(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/icon_nav']");
    }

    get trashCanBtn(){
        return $("//*[@text='Trash Can']");
    }
}

export default new DeleteNoteScreen();