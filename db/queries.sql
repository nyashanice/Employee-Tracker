SELECT e.first_name, e.last_name, 
CONCAT(m.first_name, " ", m.last_name) 
AS manager, r.title, r.salary, d.name 
FROM employee e 
left JOIN employee m ON e.manager_id = m.id 
JOIN role r ON e.role_id = r.id 
JOIN department d ON r.department_id = d.id;

SELECT e.first_name, e.last_name, CONCAT(m.first_name, " ", m.last_name) AS manager, r.title, r.salary, d.name FROM employee e left JOIN employee m ON e.manager_id = m.id JOIN role r ON e.role_id = r.id JOIN department d ON r.department_id = d.id

-- show roles
SELECT r.id, r.title, r.salary, d.name AS department FROM role r LEFT JOIN department d ON r.department_id = d.id;