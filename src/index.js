import { CreateDefaultProject as selectList } from "./functions/createProject.js"
import saveItemIntoList from "./functions/saveItemIntoList.js"

// create default project and save as JSON
function start() {
    // select the correct list
    const list = selectList();
    saveItemIntoList(list);
    
    console.log(list);
}

start();