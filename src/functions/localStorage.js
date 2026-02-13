import returnList from "./to-do-item.js";

// save as default project
export default function saveLocally() {
    const list = returnList();
    const jsonString = JSON.stringify(list);

    // local storage
    localStorage.setItem("default-project", jsonString);
    console.log(localStorage);
}