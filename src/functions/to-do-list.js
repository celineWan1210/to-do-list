import {selectList, saveList, checkItem} from "./localStorage.js"

// save todoItem to a list
export function saveAsList(item, projectName) {
    const list = selectList(projectName); 
    list.push(item);
    saveList(projectName, list);
    console.log(`Item with title ${item.title} saved to local storage`);
}

// select item using local storage
function returnItemId(projectName, itemTitle) {
    if (checkItem(projectName, itemTitle)) {
        
        // filter to find the item id
        const list = selectList(projectName); 
        const item = list.filter((item) => item.title === itemTitle);
        const itemID = item[0].id;
        console.log(`Item exists, ID selected: ${itemID}`);
        return itemID;
    }
}

// delete item using itemID
export function deleteItem(projectName, itemTitle) {
    const list = selectList(projectName);
    const itemID = returnItemId(projectName, itemTitle);

    // filter list with deleted id
    const filteredList = list.filter((item) => item.id !== itemID);
    saveList(projectName, filteredList);
    console.log(`Item with itemID ${itemID} deleted and save into local storage`);
}