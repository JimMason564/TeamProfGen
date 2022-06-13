
const inquirer = require('inquirer');
const fs = require('fs')
const generateHTML = require("./generateHTML");

const Manager = require('./lib.Manager.js')
const Engineer = require('./lib.Engineer.js')
const Intern = require('./lib.Intern.js')
//init function to start everything

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
      name: "engineererGithub",
      message: `Please enter a link to ${this.engineerName}'s GitHub Account`
    }
      ])
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
      name: "internerOfficenumber",
      message: `What school is ${this.internName} currently attending?`
    }
      ])
}
//questions for different roles

//print to html
