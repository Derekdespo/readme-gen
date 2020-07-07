// set const for modules that we will require
const inquire = require('inquirer');
const fs = require('fs');
const util = require('util')
const { title } = require('process');
const Choices = require('inquirer/lib/objects/choices');
// Promise to write a file later in the code
const writeFileAsync = util.promisify(fs.writeFile);
// This function requires the inquirer npm and will prompt the user questions that will be relevant for applying information to the markdown file
function propmtUser() {
    return inquire.prompt ([
// Below are the questions that will be prompted to the user
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
    type: 'list',
    name: 'license',
    message: 'Provide any licenses associated with your project.',
    choices: ["Apache", "Boost Software", "Creative Commons", "Educational Community", "Eclipse Public", "GNU", "ISC", "MIT", "Mozilla Public", "Unlicensed", "Other"]
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
},
{
    type: "input",
    name: "questions",
    message: "Please input your github ueser and a link to your github page."
}
]);
}
// This function is for actually writing the markdown file: answers. refers to the users answer being applied within the model text
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
    
${answers.tests}

## Questions

Should you have any questions, please refer to: ${answers.questions}
`;

}
// Calling the prompt
propmtUser()
    .then(function(answers) {
        // variable set to the calling of the generateMarkdown function
        const readMe = generateMarkdown(answers);
        // returning the actual file, here its being written
        return writeFileAsync("README.md", readMe);
    })
    .then(function() {
        // basically just tells the user that the markdown has been written successfully
        console.log("Successfully wrote a README!");
    })
    .catch(function(err) {
        console.log(err);
    }
    )

