// create project 
// return the correct list

// create new Project if havent
export default function createNewProject(projectName) {
    if (localStorage.getItem(projectName)) {
        console.log("Project exists")
        return;
    } else {
        const projectList = [];
        const projectListString = JSON.stringify(projectList);

        localStorage.setItem(projectName, projectListString);
        console.log("project created");
    }
}

