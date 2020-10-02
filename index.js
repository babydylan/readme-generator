const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

main();

// array of questions for user
// const questions = [
//     "What is the app's title?",
//     "Enter Description of app.",
//     "What are the steps required to install your app?",
//     "What are the instructions to use the app?",
//     "List any collaborators you had with links to their GitHub profiles and/or any third-party assets that require attribution, and/or tutorial links you followed.",
//     "List any tests you have for the app and how to run them.",
//     "What is your GitHub username?",
//     "What is your email address?"
// ];
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
            name: "Usage",
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
   return `
# ${answers.title}

## Description 
${answers.description}.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation
${answers.installation}.

## Usage 
${answers.usage}.

## Contributing
${answers.contributing}.

## Tests
${answers.tests}.

## Questions
If you have any questions you can reach me at ${answers.github} or ${answers.email}.

    `
}

