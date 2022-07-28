// TODO: Create a function to generate markdown for README. 
// NOTE: I don't have my email loaded in github, this is why it's pulling back "null."
function generateMarkdown(data) {
  return `
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)
  
  # **${data.title}**
  # Table of Contents
  * [Project Description](#Project-Description)
  * [Usage](#Usage)
  * [Tests](#Tests)
  * [Installation](#Installation)
  * [License](#License)
  * [Contributions](#Contributions)
  * [Questions](#Questions)

  # Project Description
  ${data.description}

  # Usage
  ${data.usage}

  # Tests
  ${data.tests}

  # Installation
  ${data.installation}

  # License
  ${data.license}

  # Contributions
  ${data.contributors}

  # Questions
  Questions? Don't contact The Elusive Man at ${data.email}...he will contact you. 

  ![user image](${data.image})

        


`;
}

module.exports = generateMarkdown;
