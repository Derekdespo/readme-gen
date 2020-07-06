// set const for modules that we will require
const inquire = require('inquirer');
const fs = require('fs');
const util = require('util')
const { title } = require('process');

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
// const questions = [
function propmtUser() {
    return inquire.prompt ([

{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your project!'
},
// {
//     type: 'input',
//     name: 'tableOfContents',
//     message: 'Input section names to create a table of contents.'
// },
{
    type: 'input',
    name: 'install',
    message: 'Please input the steps required for installing your project.'
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions for the user on how to navigate your project.'
},
{
    type: "input",
    name: "license",
    message: 'Provide any licenses associated with your project.'
},
{
    type: 'input',
    name: 'badge',
    message: 'Provide any badges associated with your project.'
},
{
    type: 'input',
    name: 'contribute',
    message: 'List any contributors on your project.'
},
{
    type: 'input',
    name: 'tests',
    message: 'You can write any available tests for your application here.'
}
]);
}

function generateMarkdown(answers) {
    return `
    # ${answers.title}

    ## Description

    ${answers.description}

    ## Table of Contents
    * [Installation](##installation)
    * [Usage](##usage)
    * [License](##license)
    * [Contributers](##contributers)
    * [Tests](##tests)

    ## Installation

    ${answers.install}

    ## Usage

    ${answers.usage}

    ## License

    ${answers.license}

    ## Contributors

    ${answers.contributors}

    ## Tests
    
    ${answers.tests}`;
}

propmtUser()
    .then(function(answers) {
        const readMe = generateMarkdown(answers);

        return writeFileAsync("README.md", readMe);
    })
    .then(function() {
        console.log("Successfully wrote a README!");
    })
    .catch(function(err) {
        console.log(err);
    }
    )
// inquire
// .prompt(questions)
// .then(answers => {
//     console.log(JSON.stringify(answers, null, " "));
// })

// const answ = JSON.stringify(data)
// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile("Readme.md", data, function(err) {
//         if (err) {
//             throw err;
//         }
//         console.log(data);
//     })
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
