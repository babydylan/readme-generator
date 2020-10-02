const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const licenses = [
    "Apache 2.0 License",
    "BSD 3-Clause License",
    "ISC License (ISC)",
    "The MIT License",
];

const writeFileAsync = util.promisify(fs.writeFile);

main();

function main() {
    promptUser()
      .then((answers) => {
        const md = generateMD(answers);
        return writeFileAsync("NewREADME.md", md);
      })
      .then(() => {
        console.log("Successfully generated readme!");
      })
      .catch((err) => {
        console.log(err);
      });
}

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your app name?",
        },
        {
            type: "input",
            name: "description",
            message: "Enter Description of app.",
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your app?",
        },
        {
            type: "input",
            name: "usage",
            message: "What are the instructions to use the app?",
        },
        {
            type: "input",
            name: "contributing",
            message: "List any collaborators you had with links to their GitHub profiles and/or any third-party assets that require attribution, and/or tutorial links you followed.",
        },
        {
            type: "input",
            name: "tests",
            message: "List any tests you have for the app and how to run them.",
        },
        {
            name: "license",
            type: "list",
            message: "Choose a license:",
            choices: licenses,
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
    ])
}
// function to write README file
function generateMD(answers) {
   let badge;
    switch (answers.license) {
      case "Apache 2.0 License":
        "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
        break;
      case "BSD 3-Clause License":
        "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"
        break;
      case "ISC License (ISC)":
        badge =
          "https://img.shields.io/badge/License-ISC-blue.svg";
        break;
      case "The MIT License":
        badge =
          "https://img.shields.io/badge/License-MIT-yellow.svg";
        break;
    }
   return `
# ${answers.title}

<img src="${badge}" alt="License badge">

## Description 
${answers.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
${answers.license}

## Questions
If you have any questions you can reach me at ${answers.github} or ${answers.email}

    `
}

