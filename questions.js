const db = require("./config/connection");
let roleChoices;
// const data = db.query(`SELECT name FROM department`);

const questions = {
  menu: [
    {
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Quit",
      ],
      name: "action",
    },
  ],
  addDepartment: [
    {
      type: "input",
      message: "What is the name of the department?",
      name: "addDepartment",
    },
  ],
  addRole(data) {
    return [
      {
        type: "input",
        message: "What is the name of the role?",
        name: "addRole",
      },
      {
        type: "number",
        message: "What is the salary of the role?",
        name: "addSalary",
      },
      {
        type: "list",
        message: "Which department does the role belong to?",
        choices: data,
        name: "chooseDepartment",
      },
    ];
  },
  addEmployee(roleData, managerData) {
    return [
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "first",
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "last",
      },
      {
        type: "list",
        message: "What is the employee's role?",
        choices: roleData,
        name: "chooseRole",
      },
      {
        type: "list",
        message: "Who is the employees manager?",
        choices: managerData,
        name: "chooseManager",
      },
    ];
  },
  updateEmployee(employeeData, newRoleData) {
    return [
      {
        type: "list",
        message: "Which employee's role would you like to update?",
        choices: employeeData,
        name: "chooseEmployee",
      },
      {
        type: "list",
        message: "Which role do you want to assign to the selected employee?",
        choices: newRoleData,
        name: "chooseNewRole",
      },
    ];
  },
};

module.exports = questions;
