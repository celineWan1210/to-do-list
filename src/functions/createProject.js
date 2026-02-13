// create project 
// return the correct list

function createDefaultProject() {
    // default create a list
    const defaultList = [];
    const defaultListString = JSON.stringify(defaultList);

    // save to default project folder
    localStorage.setItem("default-project", defaultListString);
}

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
export default function returnList(projectName = "") {
    const list = [];
    if (projectName === "") {
        projectName = "default-project";
        createDefaultProject();
    } else {
        createNewProject(projectName);
    }

    return {list, projectName};
}