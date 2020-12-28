INSERT INTO department (department_name)
VALUES
  ('Bakery'),
  ('Meat'),
  ('Produce'),
  ('Money Services');

INSERT INTO roles (title,salary,department_id)
VALUES
('Store Manager',100000,(SELECT id FROM department WHERE department_name='')),
('Bakery Manager',70000,(SELECT id FROM department WHERE department_name='Bakery')),
('Meat Manager',80000,(SELECT id FROM department WHERE department_name='Meat')),
('Produce Manager',60000,(SELECT id FROM department WHERE department_name='Produce')),
('Money Services Manager',75000,(SELECT id FROM department WHERE department_name='Money Services'));

INSERT INTO manager(first_name,last_name,roles_id)
VALUES
('Alex','Dom',(SELECT id FROM roles WHERE title='Store Manager' )),
('David','Hulk',(SELECT id FROM roles WHERE title='Store Manager' )),
('Michael','Rot',(SELECT id FROM roles WHERE title='Meat Manager' )),
('Adam','Not',(SELECT id FROM roles WHERE title='Produce Manager' )),
('Jose','Rodrigez',(SELECT id FROM roles WHERE title='Bakery Manager' )),
('Michelle','Sarah',(SELECT id FROM roles WHERE title='Money Services Manager'));

INSERT INTO employee(first_name,last_name,roles_id,manager_id)
VALUES
('Samul','loka',(SELECT id FROM roles WHERE title='Bakery Manager'),(SELECT id FROM manager WHERE last_name='Rodrigez')),
('Dani','Mota',(SELECT id FROM roles WHERE title='Meat Manager'),(SELECT id FROM manager WHERE last_name='Rot' )),
('Josef','lite',(SELECT id FROM roles WHERE title='Produce Manager'),(SELECT id FROM manager WHERE last_name='Not')),
('David','klar',(SELECT id FROM roles WHERE title='Money Services Manager'),(SELECT id FROM manager WHERE last_name='Sarah' )),
('Denisse','Hart',(SELECT id FROM roles WHERE title='Bakery Manager'),(SELECT id FROM manager WHERE last_name='Rodrigez' )),
('Monse','Silver',(SELECT id FROM roles WHERE title='Money Services Manager'),(SELECT id FROM manager WHERE last_name='Sarah' )),
('Angel','Gold',(SELECT id FROM roles WHERE title='Meat Manager'),(SELECT id FROM manager WHERE last_name='Rot' )),
('David','Run',(SELECT id FROM roles WHERE title='Bakery Manager'),(SELECT id FROM manager WHERE last_name='Rodrigez' )),
('Martin','Mike',(SELECT id FROM roles WHERE title='Produce Manager'),(SELECT id FROM manager WHERE last_name='Not' )),
('Max','chald',(SELECT id FROM roles WHERE title='Produce Manager'),(SELECT id FROM manager WHERE last_name='Not' ));