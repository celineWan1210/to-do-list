import { deleteProject } from "./functions/localStorage.js";
import createProject from "./functions/project.js"
import {createTodoItem} from "./functions/to-do-item.js"
import { deleteItem } from "./functions/to-do-list.js"
import { createCheckListItem, deleteCheckListItem, completeCheckListItem, editCheckListItem, uncheckCheckListItem } from "./functions/checkList.js";

// create default project and save as JSON
function start() {
    // start by createed a default object once
    const projectName = "default";
    createProject(projectName);

    //  item can created if it does not exists before and save
    const item1Title = "Reading";
    const item1ID = "f94e84f2-6d96-47a6-9b44-9023ba5033db";

    // Reminder for DATE: its year month(december is 11) day
    // true if high priority
    createTodoItem(item1Title, "Read 5 books", 2025, 11, 6, true, projectName);

    // check list item under to do item
    createCheckListItem(projectName, item1ID, "Read Atomic Habits");
    const checkListItem1ID = "0d5600f6-3bec-4bfd-b22d-1f98791ae884";

    // createCheckListItem(projectName, item1ID, "Read Yellow Face");
    // const checkListItem2ID = "";
    // // delete check list item
    // deleteCheckListItem(projectName, item1Title, "ID");
    completeCheckListItem(projectName, item1ID, checkListItem1ID);
    // edit the check list title
    // editCheckListItem(projectName, item1ID, checkListItem1ID, "New title");
}

start();