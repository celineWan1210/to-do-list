// save the list into Local Storage
export default function saveList(projectName, list) {
    let projectListString = localStorage.getItem(projectName);
    const projectListArray = JSON.parse(projectListString);
    
    for (let i = 0; i < list.length; i++) {
        projectListArray.push(list[i]);
    }

    projectListString = JSON.stringify(projectListArray);
    localStorage.setItem(projectName, projectListString);
}
