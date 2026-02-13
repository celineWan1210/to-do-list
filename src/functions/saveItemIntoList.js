// save the items into the list

import createItem from "./to-do-item.js"

// save todoItem to a list
function saveAsList(item, list) {
    list.push(item);
}

// send the correct list to append item inside
export default function appendItem(list) {
    const item1 = createItem("Homework");

    saveAsList(item1, list);
}
