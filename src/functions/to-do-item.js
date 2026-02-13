import { v4 as uuidv4 } from 'uuid';

// create to-do-list item and append to list
class ToDoItem {
    constructor(title) {
        this.id = uuidv4(); 
        this.title = title;
    }
}

// create new Item
function createTodoItem(title) {
    const item = new ToDoItem(title);
    return item;
}

// save todoItem to a list
function saveAsList(item, list) {
    list.push(item);
}

// return list of to-do-item
export default function returnList() {
    const list = [];

    const item1 = createTodoItem("Homework");
    const item2 = createTodoItem("Reading");
    saveAsList(item1, list);
    saveAsList(item2, list);

    return list;
}