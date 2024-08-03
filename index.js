// Including packages needed for this application
const genmd = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// Creating an array of questions for user input
const questions = ['Please enter your project title',
    'Please provide a description',
    'Please supply any installation instructions',
    'Please provide any usage information',
    'Please supply any contributing guidelines',
    'Please provide any test instructions',
    'Please select a license',
    'Please enter your GIT username',
    'Please enter you E-mail address',
 ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created readme file')
      );
}

// TODO: Create a function to initialize and run the app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'projecttitle',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'Description',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'Installation',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'Usage',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'Contributing',
      message: questions[4],
    },
    {
      type: 'input',
      name: 'Tests',
      message: questions[5],
    },
    {
      type: 'list',
      name: 'License',
      message: questions[6],
      choices: ['None', 'Apache Licence 2.0', 'GNU General Public License v3.0', 'MIT License'],
    },
    {
      type: 'input',
      name: 'GITUserName',
      message: questions[7],
    },
    {
      type: 'input',
      name: 'E-mail',
      message: questions[8],
    }
  ])
  .then((answers) => {
    // Call the imported generateMarkdown function to create our readme output
    const ReadmeContent = genmd.generateMarkdown(answers);
    writeToFile('README.md', ReadmeContent);
  });
}

// Function call to initialize app
init();

