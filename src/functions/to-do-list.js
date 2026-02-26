import {selectList, saveList, selectItem} from "./localStorage.js"

// save todoItem to a list
export function saveAsList(item, projectName) {
    const list = selectList(projectName); 
    list.push(item);
    saveList(projectName, list);
    console.log(`Item with title ${item.title} saved to local storage`);
}

// delete item using itemID
export function deleteItem(projectName, itemID) {
    const list = selectList(projectName);

    // filter list with deleted id
    const filteredList = list.filter((item) => item.id !== itemID);
    saveList(projectName, filteredList);
    console.log(`Item with itemID ${itemID} deleted and save into local storage`);
}

export function editTodoItem(itemTitle, description, year, month, date, priority, projectName, itemID) {
    const list = selectList(projectName);
    const item = list.filter((item) => item.id === itemID)[0];

    item.title = itemTitle;
    item.description = description;
    item.year = year;
    item.month = month;
    item.date = date;
    item.priority = priority;

   saveList(projectName, list);
   console.log(`Item with ID ${itemID} edited and save to local storage`);
}
