import createProject from "./functions/createProject.js"
import {createTodoItem, returnItemId} from "./functions/to-do-item.js"
import {checkProject, checkItem } from "./functions/localStorage.js";

// create default project and save as JSON
function start() {
    // start by createed a default object once
    const projectName = "default";
    if (checkProject(projectName) === false) {
        createProject(projectName);
    }

    //  item can created if it does not exists before and save
    const item = createTodoItem("Reading", projectName);
    console.log(item);

    // deleteItem(returnItemId(item1Title), projectName);

    // const projectName2 = "project2";
    // if (checkProject(projectName2) === false) {
    //     createProject(projectName2);

    //     // create a item
    //     const item1 = createTodoItem("Reading");
    //     const item2 = createTodoItem("Study")
    //     saveAsList(item1, projectName2);
    //     saveAsList(item2, projectName2);
    // }
    // const item3 = createTodoItem("Exercise");
    // saveAsList(item3, projectName2);
}

start();