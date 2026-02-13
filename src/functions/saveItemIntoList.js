import {selectList, saveList} from "./localStorage.js"

// save todoItem to a list
export default function saveAsList(item, projectName) {
    // check if item exists in the selected list
    const list = selectList(projectName);
    const checkExists = list.filter((itemSelected) => itemSelected.title === item.title);

    // push it
    // save it 
    if (checkExists.length === 0) {
        list.push(item);
        saveList(projectName, list);
    }
}
