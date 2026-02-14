import {selectList, saveList} from "./localStorage.js"

// save todoItem to a list
export function saveAsList(item, projectName) {
    const list = selectList(projectName); 
    list.push(item);
    saveList(projectName, list);
    console.log("Item saved to list");
}

export function returnItem(itemTitle) {
    const list = selectList(projectName); 

    const item = list.filter(item => item.title === itemTitle);
    console.log(item);
}

// // item id is return
// export function deleteItem(itemID, projectName) {
//     const list = selectList(projectName);

//     const itemSelected = list.filter((item) => item.id === itemID);

//     console.log(itemSelected);
// }