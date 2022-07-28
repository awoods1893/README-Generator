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
            responses.contributors = yesContributors;
          } else{
            response.contributors = noContributors;

            }

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

            writeToFile("CreatedREADME.md", generateMarkdown(response));
        } catch (err){
            console.log(err);
        };
    };
    
    // run node index.js
        compileData();



