import { deleteProject, selectCheckList } from "./functions/localStorage.js";
import createProject from "./functions/project.js"
import {createTodoItem} from "./functions/to-do-item.js"
import { deleteItem } from "./functions/to-do-list.js"
import { createCheckListItem } from "./functions/checkList.js";

// create default project and save as JSON
function start() {
    // start by createed a default object once
    const projectName = "default";
    createProject(projectName);

    //  item can created if it does not exists before and save
    const item1Title = "Reading";
    // Reminder for DATE: its year month(december is 11) day
    // true if high priority
    createTodoItem(item1Title, "Read 5 books", 2025, 11, 6, true, projectName);
    createCheckListItem(projectName, item1Title, "Read Atomic Habits");
    createCheckListItem(projectName, item1Title, "Read Atomic Habits");

    const item2Title = "Study";
    createTodoItem(item2Title, "Study for 2 hours", 2025, 8, 10, false, projectName);
}

start();