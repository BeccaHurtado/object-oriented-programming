const Manager = require("./util/Manager");
const Intern = require("./util/Intern");
const Engineer = require("./util/Engineer");
const inquirer = require("inquirer");
const { initial } = require("lodash");
const { exit } = require("process");

function init() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Are you a manager, intern, or engineer?',
            choices: ['Manager', 'Intern', 'Engineer', 'Exit Application']
        }
    ]).then(function(response) {
        switch(response.type) {
            case "Manager":
                addManager()
                break;
            case "Intern":
                addIntern()
                break;
            case "Engineer":
                addEngineer()
                break;
            case "Exit Application":
                exitApp()
                break;
        }
    })
}