import { deleteProject } from "./functions/localStorage.js";
import createProject from "./functions/project.js"
import {createTodoItem} from "./functions/to-do-item.js"
import { deleteItem, editTodoItem } from "./functions/to-do-list.js"
import { createCheckListItem, deleteCheckListItem, completeCheckListItem, editCheckListItem, uncheckCheckListItem } from "./functions/checkList.js";

// create default project and save as JSON
function start() {
    // start by createed a default object once
    const projectName = "default";
    createProject(projectName);

    //  item can created if it does not exists before and save
    const item1Title = "Reading";
    const item1ID = "ee7f5f67-0d5f-4b56-be90-b5093ef0479f";

    // Reminder for DATE: its year month(december is 11) day
    // true if high priority
    createTodoItem(item1Title, "Read 5 books", 2025, 11, 6, true, projectName);

    // check list item under to do item
    createCheckListItem(projectName, item1ID, "Read Atomic Habits");
    const checkListItem1ID = "bdde9c37-410b-400c-a564-ff7626d1c6fe";

    // // delete check list item
    // deleteCheckListItem(projectName, item1Title, "ID");
    completeCheckListItem(projectName, item1ID, checkListItem1ID);
    // edit the check list title
    // editCheckListItem(projectName, item1ID, checkListItem1ID, "New title");

    const item1EditedTitle = "Reading more";
    // editTodoItem(item1EditedTitle, "Read 6 books", 2025, 11, 6, false, projectName, item1ID);
}

start();