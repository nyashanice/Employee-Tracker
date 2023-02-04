const questions = {
    menu: [
        {
            type: "list",
            message: "What would you like to do?",
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role',
                'View All Departments', 'Add Department', 'Quit'],
            name: "action"
        },
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'addDepartment'
        }
    ]
}

module.exports = questions