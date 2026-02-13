import selectProject from "./functions/createProject.js"
import createItem from "./functions/to-do-item.js"
import saveItemIntoList from "./functions/saveItemIntoList.js"

// create default project and save as JSON
function start() {
    // start by createed a default object
    const projectName = selectProject("default");
    
    // create a item
    const item1 = createItem("Reading");
    const item2 = createItem("Study")
    saveItemIntoList(item1, projectName);
    saveItemIntoList(item2, projectName);
}

start();