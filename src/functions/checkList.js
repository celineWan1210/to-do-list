import { selectCheckList, saveList, selectList } from "./localStorage.js";

class checkList {
    constructor(title) {
        this.complete = false;
        this.title = title;
    }
}

function saveCheckListIntoLocalStorage(projectName, itemTitle, checklist) {
    // select the whole project list
    const list = selectList(projectName);
    // select item
    const item = list.filter((item) => item.title === itemTitle)[0];
    item.checkList = checklist;

    saveList(projectName, list);
}

export function createCheckListItem(projectName, itemtitle, checkListTitle) {
    const checklist = selectCheckList(projectName, itemtitle);

    // create checkList item and add into the checkList
    const checkListItem = new checkList(checkListTitle);
    //  add the item into the selected checklist
    checklist.push(checkListItem);

    saveCheckListIntoLocalStorage(projectName, itemtitle, checklist);
    console.log(`Added checklist item with title ${checkListTitle}`);
}