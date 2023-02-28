const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type: "input",
        name:"title",
        message:"Enter your project title:"
    },
    {
        type: "input",
        name:"description",
        message:"Enter a description of your project:"
    },
    {
        type: "input",
        name:"license",
        message:"What license does your project use?"
    },
    {
        type: "input",
        name:"tests",
        message:"Enter how to run tests for the project:"
    },
    {
        type: "input",
        name:"installation",
        message:"Enter how to install the project:"
    },
    {
        type: "input",
        name:"usage",
        message:"Enter instructions on usage of your project:"
    },
    {
        type: "input",
        name:"contribution",
        message:"Enter instructions for how the user can contribute to this project:"
    },
    {
        type: "input",
        name:"username",
        message:"Enter your GitHub username:"
    },
    {
        type: "input",
        name:"email",
        message:"Enter your email address:"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data)
}



// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(`Success! Generating your README.md!`)
        writeToFile('README.md', generateMarkdown({...answers}))
    })
}

// function call to initialize program
init();
