const inquirer = require("inquirer");
// const express = require('express');
const cTable = require("console.table");
const questions = require("./questions");
const db = require("./config/connection");

const chooseOption = async () => {
  //prompt to do any of the following
  let answerToInquirer = await inquirer.prompt(questions.menu);
  console.log(answerToInquirer);
  if (answerToInquirer.action === "View All Employees") {
    viewEmployees();
  } else if (answerToInquirer.action === "Add Employee") {
    addEmployee();
  } else if (answerToInquirer.action === "Update Employee Role") {
    updateEmployee();
  } else if (answerToInquirer.action === "View All Roles") {
    viewRoles();
  } else if (answerToInquirer.action === "Add Role") {
    addRole();
  } else if (answerToInquirer.action === "View All Departments") {
    viewDepartments();
  } else if (answerToInquirer.action === "Add Department") {
    addDepartment();
  } else {
    quit();
  }
};

const viewEmployees = () => {
  // showing up out of order?
  const sql = `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ',m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id JOIN role r ON e.role_id = r.id JOIN department d ON r.department_id = d.id;`;
  db.query(sql, (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    console.table(result);
    chooseOption();
  });
};

const addEmployee = async () => {
  const [rows, fields] = await db
    .promise()
    .query(`SELECT title, id AS value FROM role`);
  // .query(`SELECT CONCAT(m.first_name, ' ',m.last_name) AS manager, id AS value FROM employee m`);

  const newEmployeeData = await inquirer.prompt(questions.addEmployee(rows));
  console.log(newEmployeeData.first);
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${newEmployeeData.first}","${newEmployeeData.last}",${newEmployeeData.chooseRole},${newEmployeeData.chooseManager})`;
  db.query(sql, (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(
      "Added " +
        `${newEmployeeData.first}` +
        " " +
        `${newEmployeeData.last}` +
        " to the database"
    );
    chooseOption();
  });
};

const updateEmployee = () => {};

const viewRoles = () => {
  const sql = `SELECT r.id, r.title, r.salary, d.name AS department FROM role r LEFT JOIN department d ON r.department_id = d.id;`;
  db.query(sql, (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    console.table(result);
    chooseOption();
  });
};

const addRole = async () => {
  const [rows, fields] = await db
    .promise()
    .query(`SELECT name, id AS value FROM department`);

  const newRoleData = await inquirer.prompt(questions.addRole(rows));
  console.log(newRoleData.addRole);
  const sql = `INSERT INTO role (title, salary, department_id) VALUES ("${newRoleData.addRole}",${newRoleData.addSalary},${newRoleData.chooseDepartment})`;
  db.query(sql, (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Added " + `${newRoleData.addRole}` + " to the database");
    chooseOption();
  });
};

const viewDepartments = () => {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    console.table(result);
    chooseOption();
  });
};

const addDepartment = async () => {
  let answerToInquirer = await inquirer.prompt(questions.addDepartment);
  // console.log(`${answerToInquirer.addDepartment}`);
  const sql = `INSERT INTO department (name) VALUES (?)`;
  const params = `${answerToInquirer.addDepartment}`;

  db.query(sql, params, (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Added " + params + " to the database");
    chooseOption();
  });
  // const sql2 = `SELECT * FROM department`;
  // db.query(sql2, (err, result) => {
  //     if (err) {
  //         return console.error(err.message)
  //     }
  //     console.table(result);
  // })
};

const quit = () => {};

chooseOption();
