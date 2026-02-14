// create single todolist item
import {checkItem} from "./localStorage.js"
import { saveAsList } from "./to-do-list.js";
import { format } from "date-fns";

import { v4 as uuidv4 } from 'uuid';

// create to-do-list item and append to list
class ToDoItem {
    constructor(title, description, dueDate) {
        this.id = uuidv4(); 
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
}

function createDueDate(year, month, day) {
    return new Date(year, month, day);
}

// create new Item
export function createTodoItem(title, description, year, month, day, projectName) {
    if (checkItem(projectName, title) === false) {
        const item = new ToDoItem(title, description, createDueDate(year, month, day));
        console.log(`Item with title ${title} created`);
        saveAsList(item, projectName);
        return item;
    } else {
        console.log(`Item with title ${title} exists. No new item created`);
    }
}


