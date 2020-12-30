const mysql=require('mysql2');
const inquirer=require('inquirer');
const cTable=require('console.table');

 
// create the connection to database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password:'Master$1993',
    database:'tracker'
});
connection.connect(function(err){
    if(err){console.log("can not connect to database")
return;
};
console.log(`
 ____________________________________________________
|  _ __ __ __ __ __ __ __ ___ ___ __ __ __ __ __ __  |                                              
| |                                                | |
| |         WELCOME TO EMPLOYEE TRACKER            | |
| |_ __ __ __ __ __ __ __ ___ ___ __ __ __ __ __ __| |                                                 |
|____________________________________________________|

`)
choiceOptions();
})
 
const all_departments= [
    {
        type: 'list',
        name: 'choices',
        choices: ['view all departments','view all roles','view all employees','add a department','add a role','add an employee','update an employee role'],
        validate:(choicesInput)=>{
            if(choicesInput){return true}else{
                console.log('Plz!! Can you enter one of the following choices?');
            }
        }
      },
    
];

const choiceOptions=()=>{
    inquirer
    .prompt(all_departments)
    .then(answers =>{
      switch(answers.choices)
      {
          case 'view all departments':
          allDepartments();
          break;

          case 'view all roles':
          allRoles();
          break;

          case 'view all employees':
          allEmployees();
          break;

          case 'add a department':
          addDepartment();
          break;

          case 'add a role':
          addRoles();
          break;

          case 'add an employee':
          addEmployee();
          break;

          case 'update an employee role':
          updateEmployee();
          break;

     }}
     ).catch(error => {
        if(error.isTtyError) {
            console.log('something wents wrong !! try again')
        } else {
            
          
        }
      })
    }

function allDepartments(){
    const sql=`SELECT * FROM department`;
    connection.query(sql,(err,row)=>{
        if (err) throw err;
        console.table(row);
        choiceOptions();
    })
};

function allRoles(){
    const sql =`SELECT * FROM roles`;
    connection.query(sql,(err,row)=>{
        if (err) throw err;
        console.table(row);
        choiceOptions();
    })
};

function allEmployees(){
    const sql=`SELECT * FROM employee`;
    connection.query(sql,(err,row)=>{
        if (err) throw err;
        console.table(row);
        choiceOptions();
    })
};

function addDepartment(){
    const sql=`INSERT INTO department SET ?`;
    inquirer
    .prompt([{
        type:'input',
        name:'name',
        message:'What is the name of the department that you would to add?'
    }])
    .then(answers=>{
        connection.query(sql,{department_name:answers.name},(err,row)=>{
        if (err) throw err;
        console.table(row);
        choiceOptions();
    })})
};

function addRoles(){
    const sql=`INSERT INTO roles (roles_name,roles_salary,roles_department)`;
inquirer
.prompt([{
        type:'input',
        name:'Role_name',
        message:'Please !! Can you entre the role name?'

    },{
        type:'input',
        name:'Role_salary',
        message:'Please !! Can you entre the role salary?'
    },{
        type:'list',
        name:'Role_department',
        message:'Please !! Can you select the role department?',
        choices:['produce','bakery','meat']
    }]).then(answers=>{ console.log(answers)
        connection.query(sql,[answers.Role_name, answers.Role_salary, answers.Role_department],(err,row)=>{
            if (err) throw err;
            
            console.table(row);
            console.log(`The ${answers.name} CREATED`);
            choiceOptions();
        })
    })
}

function addEmployee(){
    const sql=`INSERT INTO employee (first_name,last_name,employee_role,Employee_manager)`;
    inquirer
    .prompt([{
        type:'input',
        name:'First_name',
        message:'Please !! Can you enter the employee first name ?'
    },{
        type:'input',
        name:'Last_name',
        message:'Please !! Can you enter the employee last name ?'

    },{
        type:'input',
        name:'Employee_role',
        message:'Please !! Can you enter the employee role ?'
    },{
        type:'input',
        name:'Employee_manager',
        message:'Please !! Can you enter the employee manager ?'
    }])
    .then(answers=>{
        connection.query(sql,[answers.First_name, answers.Last_name, answers.Employee_role, answers.Employee_manager],(err,row)=>{
            if(err) throw err;
            console.table(row)
            console.log(`${answers.First_name} ${answers.Last_name} Been Added to employee `);
            choiceOptions();
        })
    })
}

function updateEmployee(){
    const sql=`SELECT * FROM employee`;
    connection.query(sql,(err,row)=>{
        if(err) throw err,
        console.table(row);
    })
    
inquirer
.prompt([{
    type:'input',
    name:'roleUpdate',
    message:'Please !! Can you entre role id  which  would you like to update your employee ',
    
},{
    type:'input',
    name:'employeeid',
    message:'can you select employee id which would you like to update'

}])
.then(answers=>{
    connection.query('UPDATE employee SET roles_id=? WHERE id=?',[answers.roleUpdate,answers.employeeid],(err,row)=>{
    if(err) throw err;
    console.table(row);
    choiceOptions();
})
}).catch(error => {
    if(error.isTtyError) {
        console.log('something wents wrong !! try again')
    } else {
        
      console.log('errorr 223')
    }
  })
};

// function updaterolesid(){

// };

// function updatemanagerid(){

// };


