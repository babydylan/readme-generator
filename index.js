const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");



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
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your name?",
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
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
