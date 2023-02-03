const inquirer = require("inquirer");
const questions = require("./questions");

async function chooseOption() {
    //prompt to do any of the following
    let answerToInquirer = await inquirer.prompt(questions.menu)
    console.log(answerToInquirer)
    if (answerToInquirer.action === "Add Department") {
        addDepartment()
    }
    if (answerToInquirer.action === "View Department") {
        viewDepartments()
    }
}


function viewDepartments() {
    console.log("Viewing departments!")
    chooseOption()
}

function viewRoles() {
    console.log("Viewing my roles!")
}

function viewEmployees() {
    console.log("viewing employees")
}

function addEmployee() {
    console.log("Assing an employee")
}

function addDepartment() {
    console.log("Adding department")
}


const addRole = () => {
    console.log("Adding role")
}

chooseOption()