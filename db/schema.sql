DROP TABLE IF EXISTS tracker;

CREATE DATABASE tracker;

USE tracker;

CREATE TABLE department (
    id INT NOT NULL auto_increment,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE roles(
    id INT NOT NULL auto_increment,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2),
    department_id INT,
    PRIMARY KEY(id),
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) 
);
CREATE TABLE manager(
    id INT NOT NULL auto_increment,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT,
    PRIMARY KEY(id),
    CONSTRAINT fk_roles FOREIGN KEY (roles_id) REFERENCES roles(id)
);
CREATE TABLE employee(
    id INT NOT NULL auto_increment,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES manager(id) ON DELETE CASCADE,
    CONSTRAINT fk_role FOREIGN KEY (roles_id) REFERENCES roles(id)
    );