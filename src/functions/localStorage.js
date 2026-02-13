// save the list into Local Storage

// select list
export function selectList(projectName) {
    const projectListString = localStorage.getItem(projectName);
    const projectListArray = JSON.parse(projectListString);

    console.log(projectListString)
    console.log(projectListArray);
    return projectListArray;
}

// save the list
export function saveList(projectName, list) 
{
    const projectListString = JSON.stringify(list);
    localStorage.setItem(projectName, projectListString);
}
