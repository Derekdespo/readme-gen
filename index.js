// set const for modules that we will require
const inquire = require('inquirer');
const fs = require('fs');
const { title } = require('process');

// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "Describe your project!"
},
{
    type: "input",
    name: "tableOfContents",
    message: "Input section names to create a table of contents."
},
{
    type: "input",
    name: "install",
    message: "Please input the steps required for installing your project."
},
{
    type: "input",
    name: "usage",
    message: "Provide instructions for the user on how to navigate your project."
},
{
    type: "input",
    name: "license",
    message: "Provide any licenses associated with your project."
},
{
    type: "input",
    name: "badge",
    message: "Provide any badges associated with your project."
},
{
    type: "input",
    name: "contribute",
    message: "List any contributors on your project."
},
{
    type: "input",
    name: "tests",
    message: "You can write any available tests for your application here."
}
];

const answ = JSON.stringify(answers)
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("Readme.md", answ, function(err) {
        if (err) {
            throw err;
        }
        console.log(answers);
    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
