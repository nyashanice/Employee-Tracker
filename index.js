const inquirer = require("inquirer");
// const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');
const questions = require("./questions");

// creates connection to the database
const db = mysql.createConnection(
    {
        // Apple M1 chip host
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'workplace_db'
    },
    console.log(`Connected to the database.`)
);

const chooseOption = async () => {
    //prompt to do any of the following
    let answerToInquirer = await inquirer.prompt(questions.menu[0])
    console.log(answerToInquirer)
    if (answerToInquirer.action === 'View All Employees') {
        viewEmployees()
    }
    else if (answerToInquirer.action === "Add Employee") {
        addEmployee()
    }
    else if (answerToInquirer.action === "Update Employee Role") {
        updateEmployee()
    }
    else if (answerToInquirer.action === "View All Roles") {
        viewRoles()
    }
    else if (answerToInquirer.action === "Add Role") {
        addRole()
    }
    else if (answerToInquirer.action === "View All Departments") {
        viewDepartments()
    }
    else if (answerToInquirer.action === "Add Department") {
        addDepartment()
    }
    else {
        quit()
    }
}

const viewEmployees = () => {
    // showing up out of order?
    const sql = `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ',m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id JOIN role r ON e.role_id = r.id JOIN department d ON r.department_id = d.id;`;
    db.query(sql, (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        console.table(result);
        chooseOption();
    })
}

const addEmployee = () => {

}

const updateEmployee = () => {

}

const viewRoles = () => {
    const sql = `SELECT r.id, r.title, r.salary, d.name AS department FROM role r LEFT JOIN department d ON r.department_id = d.id;`;
    db.query(sql, (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        console.table(result);
        chooseOption();
    })
}

const addRole = () => {

}

const viewDepartments = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        console.table(result);
        chooseOption();
    })
}

const addDepartment = async () => {
    let answerToInquirer = await inquirer.prompt(questions.menu[1])
    // console.log(`${answerToInquirer.addDepartment}`);
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const params = `${answerToInquirer.addDepartment}`;

    db.query(sql, params, (err, result) => {
        if (err) {
            return console.error(err.message)
        }
        console.log('Added ' + params + ' to the database');
        chooseOption();
    })
    // const sql2 = `SELECT * FROM department`;
    // db.query(sql2, (err, result) => {
    //     if (err) {
    //         return console.error(err.message)
    //     }
    //     console.table(result);
    // })
}

const quit = () => {

}



chooseOption();

