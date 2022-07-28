// inquirer, generateMarkdown and fs are required
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const apiquery = require("./utils/apiqueries");

// contributor guidelines (yes or no)
const yesContributors = "Contributing to this project? Please follow the guidelines specified [here](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)"
const noContributors = "This project is not accepting contributions from any outside developers at this time."

// license specifications
const mitLicense ="This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)."
const apacheLicense = "This project is licensed under the [Apache License](https://www.apache.org/licenses/LICENSE-2.0)."
const gnuLicense = "This project is licensed under the [GNU License](https://www.gnu.org/licenses/gpl-3.0-standalone.html)"
const iscLicense = "This project is licensed under the [ISC License](https://www.isc.org/licenses/)"

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message:  "Describe your project"
    },  
    {
        type: "input",
        name: "usage",
        message:  "How do plan to use this project's application?"
    }, 
    {
        type: "input",
        name: "tests",
        message:  "How will you perform testing on this project's application?"
    },
    {
        type: "input",
        name: "installation",
        message:  "What dependencies or installation packages are required for your project to function correctly?"
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license",
        choices: [
            "Apache License 2.0",
            "GNU GPLv3",
            "MIT",
            "ISC",
            "None"
        ]
    },
    {
        type: "list",
        name: "contributors",
        message: "Would you like other developers to contribute to your project?",
        choices: [
            "Yes",
            "No"
        ]
    }
  
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
