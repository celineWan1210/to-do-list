// create single todolist item
import {checkItem} from "./localStorage.js"
import { saveAsList } from "./to-do-list.js";

import { v4 as uuidv4 } from 'uuid';

// create to-do-list item and append to list
class ToDoItem {
    constructor(title) {
        this.id = uuidv4(); 
        this.title = title;
    }
}

// create new Item
export function createTodoItem(title, projectName) {
    if (checkItem(projectName, title) === false) {
        const item = new ToDoItem(title);
        console.log("item created");
        saveAsList(item, projectName);
        return item;
    } else {
        console.log("Item exists. No new item created");
    }
}

export function returnItemId(item) {
    return item.id
}

