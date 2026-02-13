// create single todolist item

import { v4 as uuidv4 } from 'uuid';

// create to-do-list item and append to list
class ToDoItem {
    constructor(title) {
        this.id = uuidv4(); 
        this.title = title;
    }
}

// create new Item
export default function createTodoItem(title) {
    const item = new ToDoItem(title);
    return item;
}

