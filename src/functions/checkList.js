import { selectCheckList, saveList, selectList, selectItem } from "./localStorage.js";
import { v4 as uuidv4 } from 'uuid';

class checkList {
    constructor(title) {
        this.id = uuidv4();
        this.complete = false;
        this.title = title;
    }
}

function saveCheckListIntoLocalStorage(projectName, itemID, checklist) {
    // select the whole project list
    const list = selectList(projectName);
    // select item
    const item = list.filter((item) => item.id === itemID)[0];
    item.checkList = checklist;

    saveList(projectName, list);
}

function saveCheckList(checkListArray, checkListTitle, projectName, itemID) {
    // check if there is same title in the array
    const filterArray = checkListArray.filter((checkListItem) => checkListItem.title === checkListTitle);
    
    // if filterarray is empty means no such title is created yet
    if (filterArray.length === 0) {
        const checkListItem = new checkList(checkListTitle);
        checkListArray.push(checkListItem);

        // add to the local storage
        saveCheckListIntoLocalStorage(projectName, itemID, checkListArray);
        console.log(`New check list item with title ${checkListTitle} is created and added to local storage`);
    } else {
        console.log(`Check list item with name ${checkListTitle} is created before`);
    }
}

function selectCheckItem(checkListArray, checkItemID) {
    const filterArray = checkListArray.filter((checkListItem) => checkListItem.id === checkItemID);
    if (filterArray.length != 0) {
        console.log(`Item with ID ${checkItemID} exist`);
        return filterArray[0];
    } else {
        console.log(`No item with ID ${checkItemID} exist`);
    }
}

export function deleteCheckListItem(projectName, itemID, checkItemID) {
    const checkListArray = selectCheckList(projectName, itemID);

    // filter checkListItemID out
    const filteredArray = checkListArray.filter((checkListItem) => checkListItem.id !== checkItemID);

    // save it
    saveCheckListIntoLocalStorage(projectName, itemID, filteredArray);
    console.log(`Item with id ${checkItemID} is deleted and updated in local storage`);
}

export function createCheckListItem(projectName, itemID, checkListTitle) {
    const checkListArray = selectCheckList(projectName, itemID);

    saveCheckList(checkListArray, checkListTitle, projectName, itemID);
}

function saveCheckListCompletionIntoLocalStorage(projectName, itemID) {
    const list = selectList(projectName);
    const item = list.filter((item) => item.id === itemID)[0];
    item.complete = true;
    
    saveList(projectName, list);
}

function checkCheckListItem(projectName, itemID) {
    const checkListArray = selectCheckList(projectName, itemID);

    const checkListArrayFilter = checkListArray.filter((checkListItem) => checkListItem.complete === false); 

    // if all is completed (no false) then update the localstorage todolist
    if (checkListArrayFilter.length === 0) {
        saveCheckListCompletionIntoLocalStorage(projectName, itemID);
        console.log("All checklist is completed and updated in local Storage");
    } else {
        console.log("Not yet complete all checklist");
    }
}

export function completeCheckListItem(projectName, itemID, checkItemID) {
    const checkListArray = selectCheckList(projectName, itemID);
    const checkListItem = selectCheckItem(checkListArray, checkItemID);

    checkListItem.complete = true;
    saveCheckListIntoLocalStorage(projectName, itemID, checkListArray);
    checkCheckListItem(projectName, itemID);
}


export function editCheckListItem(projectName, itemID, checkListID, newTitle) {
    const checkListArray = selectCheckList(projectName, itemID);
    const checkListItem = selectCheckItem(checkListArray, checkListID);

    checkListItem.title = newTitle;
    saveCheckListIntoLocalStorage(projectName, itemID, checkListArray);
    console.log("Item name edited");
}

