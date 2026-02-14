// create project 
// return the correct list
import { checkProject } from "./localStorage.js";

// create new Project if havent
export default function createNewProject(projectName) {
    if (checkProject(projectName) === false) {
        const projectList = [];
        const projectListString = JSON.stringify(projectList);

        localStorage.setItem(projectName, projectListString);
        console.log(`Project with project name ${projectName} created`);
    } else {
        console.log(`Project with project name ${projectName} exists`);
    }
}

