-- show roles
SELECT r.id, r.title, r.salary, d.name AS department FROM role r LEFT JOIN department d ON r.department_id = d.id;

-- show employees
-- id, first, last, title, department, salary, manager
SELECT e.id, e.first_name, e.last_name, r.title AS title, d.name AS department, r.salary, CONCAT(m.first_name, ' ',m.last_name) AS manager
FROM employee e LEFT JOIN role r ON e.role_id = r.id
JOIN department d ON r.department_id = d.id
JOIN employee m ON e.manager_id = m.id;

SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ',m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id JOIN role r ON e.role_id = r.id JOIN department d ON r.department_id = d.id;

-- add department
INSERT INTO department (name) VALUES (finance)
