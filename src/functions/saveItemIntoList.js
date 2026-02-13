// save todoItem to a list
function saveAsList(item, list) {
    // check if item exists
    const checkExists = list.filter((itemSelected) => itemSelected.title === item.title);

    if (checkExists.length === 0) {
        list.push(item);
    }
}

// send the correct list to append item inside
export default function appendItem(item, list) {
    saveAsList(item, list);
}
