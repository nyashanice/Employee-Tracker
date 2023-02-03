INSERT INTO department (name)
VALUES ('Web Development'),
       ('Marketing'),
       ('UX'),
       ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES ('Back End Developer', 130.9, 1),
       ('Digital Marketing Analyst', 67.5, 2),
       ('UX Designer', 75.8, 3),
       ('UX Researcher', 90.3, 3),
       ('Front End Developer', 130.9, 1),
       ('Senior Developer', 200.2, 1),
       ('Junior Developer', 115.4, 1),
       ('SEO Specialist', 60.7, 2),
       ('Graphic Designer', 60.9, 2),
       ('Social Media Manager', 58.3, 2),
       ('Sales Manager', 120.6, 4),
       ('Sales Specialist', 92.1, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Pam','Beesly-Halpert', 6, null),
       ('Andy','Bernard', 2, null),
       ('Darryl','Philbin', 4, null),
       ('Jan','Levinson', 11, null),
       ('Michael','Scott', 12, 4),
       ('Dwight','Schrute', 1, 1),
       ('Jim','Halpert', 5, 1),
       ('Kelly','Kapoor', 9, 2),
       ('Phyllis','Vance', 3, 3),
       ('Oscar','Martinez', 7, 1),
       ('Angela','Martin', 5, 1),
       ('Ryan','Howard', 10, 8),
       ('Erin','Hannon', 8, 2),
       ('Kevin','Malone', 12, 4),
       ('Stanley','Hudson', 3, 3),
       ('Creed','Bratton', 7, 1),
       ('Meredith','Palmer', 12, 4),
       ('Toby','Flenderson', 8, 2),
       ('Holly','Flax', 1, 1),
       ('Roy','Anderson', 8, 2);