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
      choices: ['None', 
        'Apache Licence 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause License',
        'BSD 3-Clause License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v3.0',
        'Mozilla Public License 2.0',
        'The Unlicense' 
      ],
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
    let ReadmeContent = genmd.generateMarkdown(answers);
    //Check for license
    let strLicense = genmd.renderLicenseSection(ReadmeContent);
    let LicensebadgeImage = genmd.renderLicenseBadge(strLicense);
    //Insert license badge and content
    if(LicensebadgeImage != ''){
      ReadmeContent = genmd.insertLicenseBadge(LicensebadgeImage, ReadmeContent);
      ReadmeContent = genmd.insertLicenseSection(strLicense, ReadmeContent);
    }

    //Write out the updated Readme content
    writeToFile('README.md', ReadmeContent);
  });
}

// Function call to initialize app
init();
