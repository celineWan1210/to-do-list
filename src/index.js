import selectProject from "./functions/createProject.js"
import saveItemIntoList from "./functions/saveItemIntoList.js"
import saveListIntoProject from "./functions/localStorage.js"
import createItem from "./functions/to-do-item.js"

// create default project and save as JSON
function start() {
    // start by createed a default object
    const list = selectProject().list;
    const projectName = selectProject().projectName;
    
    // create a item
    const item1 = createItem("Reading");
    const item3 = createItem("Piano");
    saveItemIntoList(item1, list);
    saveItemIntoList(item3, list);
    saveListIntoProject(projectName, list);


    const list2 = selectProject("Project2").list;
    const projectName2 = selectProject("Project2").projectName;

    // create a item for second project
    const item2 = createItem("Study");
    const item4 = createItem("Study");
    saveItemIntoList(item2, list2);
    saveItemIntoList(item4, list2);
    saveListIntoProject(projectName2, list2);
}

start();