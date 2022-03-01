const Manager = require("./util/Manager");
const Intern = require("./util/Intern");
const Engineer = require("./util/Engineer");
const inquirer = require("inquirer");

function init() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Are you a manager, intern, or engineer?',
            choices: ['Manager', 'Intern', 'Engineer', 'Exit']
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
            case "Exit":
                exitApp()
                break;
        }
    })
}

init();