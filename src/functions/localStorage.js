// save the list into Local Storage

// select list
export function selectList(projectName) {
    const projectListString = localStorage.getItem(projectName);
    const projectListArray = JSON.parse(projectListString);

    console.log(projectListString)
    console.log(projectListArray);
    return projectListArray;
}

// if not return null means project exists
export function checkProject(projectName) {
    if (localStorage.getItem(projectName) !== null) {
        return true;
    } else {
        return false;
    }
}

// save the list
export function saveList(projectName, list) 
{
    const projectListString = JSON.stringify(list);
    localStorage.setItem(projectName, projectListString);
}
