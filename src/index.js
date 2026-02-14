import createProject from "./functions/createProject.js"
import createItem from "./functions/to-do-item.js"
import saveItemIntoList from "./functions/to-do-list.js"
import { selectList, checkProject, saveList } from "./functions/localStorage.js";

// create default project and save as JSON
function start() {
    // start by createed a default object once
    const projectName = "default"
    if (checkProject(projectName) === false) {
        createProject(projectName);

        // create a item
        const item1 = createItem("Reading");
        const item2 = createItem("Study")
        saveItemIntoList(item1, projectName);
        saveItemIntoList(item2, projectName);
    }
    
    const projectName2 = "project2";
    if (checkProject(projectName2) === false) {
        createProject(projectName2);

        // create a item
        const item1 = createItem("Reading");
        const item2 = createItem("Study")
        saveItemIntoList(item1, projectName2);
        saveItemIntoList(item2, projectName2);
    }
}

start();