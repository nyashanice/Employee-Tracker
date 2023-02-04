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

async function chooseOption() {
    //prompt to do any of the following
    let answerToInquirer = await inquirer.prompt(questions.menu)
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
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, result) => {
        if (err) {
            return console.error(error.message);
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

}

const addRole = () => {

}

const viewDepartments = () => {

}

const addDepartment = () => {

}

const quit = () => {

}



chooseOption()