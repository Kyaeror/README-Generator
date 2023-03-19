// TODO: Include packages needed for this application
const fs = require(`fs`)
const inquirer = require(`inquirer`)
const generateMarkdown = require(`./Develop/utils/generateMarkdown`)

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines:',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions:',
      },
      {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-Clause', 'Unlicense'],
      },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
