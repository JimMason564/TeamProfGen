
const inquirer = require('inquirer');
const fs = require('fs')
const generateHTML = require("./src/generate");

const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const employees = [ ]
const path = require("path")

//Figure out where dist is in directory structure
const DIST_DIR = path.resolve(__dirname, 'dist');

//Add team HTML to dist
const distPath = path.join(DIST_DIR, 'team.html');

//init function to start everything
function init(){
//menu with prompts for different roles
function managerEl () {
  inquirer.prompt ([
{
  type: "input",
  name: "managerName",
  message: "What is this manager's name?"
},
{
  type: "input",
  name: "managerID",
  message: "What is this manager's employee ID?" 
},
{
  type: "input",
  name: "managerEmail",
  message: "What is this manager's email address?"
},
{
  type: "input",
  name: "managerOfficenumber",
  message: "What is this manager's office number"
}
  ])
  .then((res, err) => {
    if (err) console.error(err);
    const manager= new Manager(
      res.managerName,
      res.managerID,
      res.managerEmail,
      res.managerOfficenumber
    );
    employees.push(manager);
    console.log(employees);
      createTeam()
  });
}

function createTeam() {
  inquirer.prompt ([
    {
    type: "list",
      name: "choice",
      message: "What type of team member would you like to add?",
      choices: ["Engineer","Intern", "Team is complete"]
    }
  ])
  .then ((res)=> {
    if (res.choice === "Engineer"){
      engineerEl()
    }
    else if(res.choice === "Intern") {
      internEl()
    }
    else {
      renderTeam()
    }
  })
}

function engineerEl() {
  inquirer.prompt ([
    {
      type: "input",
      name: "engineerName",
      message: "What is this engineer's name?"
    },
    {
      type: "input",
      name: "engineerID",
      message: "What is this engineer's employee ID?" 
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is this engineer's email address?"
    },
    {
      type: "input",
      name: "engineerGithub",
      message: `Please enter a link to this engineer's GitHub Account`
    }
      ])
      .then((res, err) => {
        if (err) console.error(err);
        const engineer= new Engineer(
          res.engineerName,
          res.engineerID,
          res.engineerEmail,
          res.engineerGithub
        );
        employees.push(engineer);
        console.log(employees);
        createTeam();
      });
}

function internEl() {
  inquirer.prompt ([
    {
      type: "input",
      name: "internName",
      message: "What is this intern's name?"
    },
    {
      type: "input",
      name: "internID",
      message: "What is this intern's employee ID?" 
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is this intern's email address?"
    },
    {
      type: "input",
      name: "internSchool",
      message: `What school are they currently attending?`
    }
      ])
      .then((res, err) => {
        if (err) console.error(err);
        const intern = new Intern(
          res.internName,
          res.internID,
          res.internEmail,
          res.internSchool
        );
        employees.push(intern);
        console.log(employees);
        createTeam();
      });
}

function renderTeam() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  }
  fs.writeFileSync(distPath, generateHTML(employees), 'utf-8');
}
managerEl();
}

init()
