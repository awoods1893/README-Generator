// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
        # Table of Contents
        - [Project Description](#project-description)
        - [Usage](#usage)
        - [Tests](#tests)
        - [Installation](#installation)
        - [License](#license)
        - [Contributions](#contributions)
        - [Questions](#questions)

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
        ${data.contributions}

        # Questions
        Questions? Please contact the project owner at #### ${data.email}


`;
}

module.exports = generateMarkdown;
