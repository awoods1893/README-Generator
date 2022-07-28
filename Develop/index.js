// inquirer, generateMarkdown and fs are required
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const apiquery = require("./utils/apiqueries");

// contributor guidelines (yes or no)
const yesContributors = "Contributing to this project? Please follow the guidelines specified [here](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)."
const noContributors = "This project is not accepting contributions from any outside developers at this time."

// license specifications
const mitLicense ="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
const apacheLicense = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)."
const gnuLicense = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
const iscLicense = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"

// Create a question for github user input
const gitHubUserQuestion = [
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username:"
    }
];
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
        message:  "Describe your project:"
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err){
            console.log(err);
        } else{
            console.log("Inputs Received.");
        }
    });
};

//Function for compiling the user's answers from the question prompts
async function compileData() {
    try {

        //prompt for github username
        await inquirer.prompt(gitHubUserQuestion)
        .then(function(res){
            return username = res.username;
        });

        await apiquery.getGitHubUser(username);

        //prompt for questions
        await inquirer.prompt(questions)
        .then(function(res){
            return response = res;
        });

        response.username = username;
        response.image = gitHubProfilePic;
        response.email = gitHubEmailAddress;

        // Look for contributor choices
        if(response.contributors === "Yes"){
            response.contributors = yesContributors;
          } else{
            response.contributors = noContributors;

            }
        // Look for license choices
            if(response.license === "Apache License 2.0"){
                response.license = apacheLicense;
            } else if (response.license === "ISC"){
                response.license = iscLicense;
            } else if (response.license === "MIT"){
                response.license = mitLicense;
            } else if (response.license === "GNU GPLv3"){
                response.license = gnuLicense;
            } else{
                response.license = "There is no license for this project."
            }
            
            // generate the readme based on the user's answers to the questions
            writeToFile("CreatedREADME.md", generateMarkdown(response));
        } catch (err){
            console.log(err);
        };
    };
    
    // run node index.js
        compileData();



