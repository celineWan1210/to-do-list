import { deleteProject } from "./functions/localStorage.js";
import createProject from "./functions/project.js"
import {createTodoItem} from "./functions/to-do-item.js"
import { deleteItem } from "./functions/to-do-list.js"
import { createCheckListItem, deleteCheckListItem, completeCheckListItem } from "./functions/checkList.js";

// create default project and save as JSON
function start() {
    // start by createed a default object once
    const projectName = "default";
    createProject(projectName);

    //  item can created if it does not exists before and save
    const item1Title = "Reading";
    const item1ID = "8771184a-ba1a-4d15-81be-f2deb6ffa6a5";

    // Reminder for DATE: its year month(december is 11) day
    // true if high priority
    createTodoItem(item1Title, "Read 5 books", 2025, 11, 6, true, projectName);

    // check list item under to do item
    createCheckListItem(projectName, item1ID, "Read Atomic Habits");
    const checkListItem1ID = "2d08cada-4cbe-4267-8217-0fd7c4a999cd";

    createCheckListItem(projectName, item1ID, "Read Yellow Face");
    const checkListItem2ID = "f05768c5-673d-457c-8190-85be75eeea5e";
    // // delete check list item
    // deleteCheckListItem(projectName, item1Title, "ID");
    completeCheckListItem(projectName, item1ID, checkListItem1ID);


    const projectName2 = "Project 2";
    createProject(projectName2);
    // deleteProject(projectName2);
}

start();