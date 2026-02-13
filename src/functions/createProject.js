// create project 
// return the correct list

// TODO: find a way to create list and return project name as final function

export function CreateDefaultProject() {
    // default create a list
    const defaultList = [];
    const defaultListString = JSON.stringify(defaultList);

    // save to default project folder
    localStorage.setItem("default-project", defaultListString);

    console.log(defaultList);
    return defaultList;
}

