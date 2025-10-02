class AddNoteScreen {
    get skipBtn(){
        return $("//*[@text='SKIP']");
    }

    get addNoteBtn(){
        return $("//*[@text='Add note']");
    }

    get textBtn(){
        return $("//*[@text='Text']");
    }

    get editBtn(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_btn']");
    }

    get inputTitle(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_title']");
    }

    get inputBody(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_note']");
    }

    get emptyBody(){
        return $("//android.widget.TextView[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/empty_text']");
    }

    get viewNote(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/view_note']");
    }

    async saveNote(){
        // save the changes
        await driver.back();
        await driver.back();
    }
}

export default new AddNoteScreen();