import { selectCheckList, saveList, selectList } from "./localStorage.js";
import { v4 as uuidv4 } from 'uuid';

class checkList {
    constructor(title) {
        this.id = uuidv4();
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

function saveCheckList(checkListArray, checkListTitle, projectName, itemtitle) {
    // check if there is same title in the array
    const filterArray = checkListArray.filter((checkListItem) => checkListItem.title === checkListTitle);
    
    // if filterarray is empty means no such title is created yet
    if (filterArray.length === 0) {
        const checkListItem = new checkList(checkListTitle);
        checkListArray.push(checkListItem);

        // add to the local storage
        saveCheckListIntoLocalStorage(projectName, itemtitle, checkListArray);
        console.log(`New check list item with title ${checkListTitle} is created and added to local storage`);
    } else {
        console.log(`Check list item with name ${checkListTitle} is created before`);
    }
}

export function createCheckListItem(projectName, itemtitle, checkListTitle) {
    const checkListArray = selectCheckList(projectName, itemtitle);

    saveCheckList(checkListArray, checkListTitle, projectName, itemtitle);
}