import createProject from "./functions/createProject.js"
import {createTodoItem} from "./functions/to-do-item.js"
import { returnItemId, deleteItem } from "./functions/to-do-list.js";

// create default project and save as JSON
function start() {
    // start by createed a default object once
    const projectName = "default";
    createProject(projectName);

    //  item can created if it does not exists before and save
    const item1Title = "Reading";
    createTodoItem(item1Title, projectName);
    // delete item
    deleteItem(projectName, item1Title);

    // second item create
    const item2Title = "Study";
    createTodoItem(item2Title, projectName);
}

start();