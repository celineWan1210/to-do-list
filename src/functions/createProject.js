// create project 
// return the correct list

// create new Project if havent
function createNewProject(projectName) {
    if (localStorage.getItem(projectName)) {
        console.log("Project exists")
        return;
    } else {
        const projectList = [];
        const projectListString = JSON.stringify(projectList);

        localStorage.setItem(projectName, projectListString);
    }
}

// export the list and projectName
export default function returnList(projectName) {
    createNewProject(projectName);

    return projectName;
}