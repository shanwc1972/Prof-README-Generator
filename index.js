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
    'Please provide any test instructions'
 ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created readme file')
      );
}

// Function to generate the readme file
function generateReadMe({ projecttitle, Description, Installation, Usage, Contributing, Tests }){
   
    //console.log(projecttitle);
    //console.log(Description);
    //console.log(Installation);
    //console.log(Usage);
    //console.log(Contributing);
    //console.log(Tests);

    const strReadme = `# ${projecttitle}
  
  ## Description
  ${Description}
  
  ## Installation
  ${Installation}
  
  ## Usage
  ${Usage}
  
  ## Contributions
  ${Contributing}
  
  ## Tests
  ${Tests}
  
  ## License`;
  return strReadme;
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
  ])
  .then((answers) => {
    console.log(answers);
    //const {
    //    projecttitle,
    //    Description,
    //    Installation,
    //    Usage,
    //    Contributing,
    //    Tests
    //} = answers;
    for (const key in answers) {
        if (answers.hasOwnProperty(key)) {
            console.log(`${key}: ${answers[key]}`);
        }
    };
    const ReadmeContent = generateReadMe(answers);
    writeToFile('README.md', ReadmeContent);
  });
}

// Function call to initialize app
init();

