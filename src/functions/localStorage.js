// save the list into Local Storage

// select list
export function selectList(projectName) {
    const projectListString = localStorage.getItem(projectName);
    const projectListArray = JSON.parse(projectListString);

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

// check if same name item had been created before
export function checkItem(projectName, itemTitle) {
    const list = selectList(projectName);
    const filterItem = list.filter(item => item.title === itemTitle);

    if (filterItem.length === 0) {
        return false;
    } else {
        return true;
    }
}

// select project
export function deleteProject(projectName) {
    if (checkProject(projectName)) {
        localStorage.removeItem(projectName);
        console.log("project deleted");
    }
}

// save the list
export function saveList(projectName, list) 
{
    const projectListString = JSON.stringify(list);
    localStorage.setItem(projectName, projectListString);
}
